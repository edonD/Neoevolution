import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;
import UploadParametersData from "../Parameters-Data-View/UploadParametersData";
import {
  retrieveCSVromS3,
  overwriteFileInStorage,
  deleteFileFromStorage,
} from "../../Storage/UploadFileFunctions";
import {
  columnExtractor,
  convertToCSV,
  convertToFormat,
  scientificNotation,
} from "../Parameters-Data-View/CSVProcessor";
import { useDispatch, useSelector } from "react-redux";
import { selectUserNameId } from "../../../store/slices/userSlice";
import {
  selectedParametersData,
  removeParameterItem,
  selectParametersItems,
} from "../../../store/slices/parametersDataSlice";
import { Dialog } from "primereact/dialog";
import { Oval } from "react-loader-spinner";
// import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { updateTestbenchItem } from "../../../store/slices/headerIconsSlice";
import { useRouter } from "next/router";

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
  const [editing, setEditing] = useState(false);
  const [displayValue, setDisplayValue] = useState(rowData[dataKey]);

  const [scaleClassName, setScaleClassName] = useState("");
  const [modeClassName, setModeClassName] = useState("");

  useEffect(() => {
    // Set the initial className based on the initial value of rowData[dataKey]
    setScaleClassName(
      rowData[dataKey] === "lin" ? "orange-white" : "teal-white"
    );
  }, [rowData, dataKey]);

  useEffect(() => {
    // Set the initial className based on the initial value of rowData[dataKey]
    setModeClassName(
      rowData[dataKey] === "variable" ? "indigo-white" : "deeporange-white"
    );
  }, [rowData, dataKey]);

  if (dataKey === "mode") {
    const handleClick = () => {
      const currentValue = rowData[dataKey];
      const updatedValue = currentValue === "variable" ? "fixed" : "variable";
      onChange && onChange(rowData.id, dataKey, updatedValue);
      setModeClassName(
        updatedValue === "variable" ? "indigo-white" : "deeporange-white"
      );
    };

    return (
      <Cell
        {...props}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className='table-content-editing'
        onClick={handleClick}
      >
        <Button className={modeClassName}>{rowData[dataKey]}</Button>
      </Cell>
    );
  }

  if (dataKey === "scale") {
    const handleClick = () => {
      const currentValue = rowData[dataKey];
      const updatedValue = currentValue === "lin" ? "log" : "lin";
      onChange && onChange(rowData.id, dataKey, updatedValue);
      setScaleClassName(updatedValue === "lin" ? "orange-white" : "teal-white");
    };

    return (
      <Cell
        {...props}
        className='table-content-editing'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={handleClick} className={scaleClassName}>
          {rowData[dataKey]}
        </Button>
      </Cell>
    );
  }
  if (dataKey === "name") {
    const handleClick = () => {
      setEditing(true);
    };

    const handleBlur = () => {
      setEditing(false);
      onChange && onChange(rowData.id, dataKey, displayValue);
    };

    const handleChange = (event) => {
      setDisplayValue(event.target.value);
    };

    return (
      <Cell
        {...props}
        className={editing ? "table-content-editing" : ""}
        onClick={handleClick}
      >
        {editing ? (
          <input
            className='rs-input'
            value={displayValue}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <span className='table-content-edit-span'>{rowData[dataKey]}</span>
        )}
      </Cell>
    );
  }

  // const [editing, setEditing] = useState(false);
  // const [displayValue, setDisplayValue] = useState(rowData[dataKey]);

  const formatSmallNumbers = (number) => {
    const formatted = number.toLocaleString(undefined, {
      minimumFractionDigits: 10,
    });
    return formatted.replace(/\.?0+$/, "");
    return value;
  };
  const handleClick = () => {
    if (!editing) {
      const value = Number(rowData[dataKey]);

      const display =
        (value < 0.001 && value > 0.0000000001) ||
        (value > -0.001 && value < -0.0000000001)
          ? formatSmallNumbers(value)
          : scientificNotation(value);
      setDisplayValue(display);
      setEditing(true);
    }
  };

  return (
    <Cell
      {...props}
      className={editing ? "table-content-editing" : ""}
      onClick={handleClick}
    >
      {editing ? (
        <input
          className='rs-input'
          value={displayValue}
          onChange={(event) => {
            setDisplayValue(event.target.value);
          }}
          onBlur={() => {
            setEditing(false);
            const formattedValue =
              dataKey === "name"
                ? displayValue
                : scientificNotation(Number(displayValue));
            onChange && onChange(rowData.id, dataKey, formattedValue);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              setEditing(false);
              const formattedValue =
                dataKey === "name"
                  ? displayValue
                  : scientificNotation(Number(displayValue));
              onChange && onChange(rowData.id, dataKey, formattedValue);
            }
          }}
          autoFocus
        />
      ) : (
        <span className='table-content-edit-span'>{rowData[dataKey]}</span>
      )}
    </Cell>
  );
};
function DataGridParameters({ type }) {
  const [csvData, setCSVData] = useState(null);
  const [columns, setColumns] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [continueLoading, setContinueLoading] = useState(false);
  const usernameID = useSelector(selectUserNameId);
  const [errorDialogVisible, setErrorDialogVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const file = useSelector(selectedParametersData);
  const items = useSelector(selectParametersItems);
  const router = useRouter();
  const dispatch = useDispatch();

  const userId = usernameID; // Replace with the actual user ID.
  const folderName = "Model Parameters"; // Replace with the desired folder name
  const fileName = file; // Replace with the desired file name.
  const path = `${userId}/${folderName}/${fileName}`;

  useEffect(() => {
    if (csvData && typeof csvData === "string") {
      setColumns(columnExtractor(csvData));
    }
  }, [csvData]);

  useEffect(() => {
    if (csvData && typeof csvData === "string") {
      setParameters(convertToFormat(csvData));
    }
  }, [csvData]);

  useEffect(() => {
    setParameters([]);
    setCSVData();
    if (items.length > 0) {
      async function fetchCSVData() {
        if (fileName !== "") {
          try {
            setLoading(true);
            const response = await retrieveCSVromS3(path);

            if (response) {
              setLoading(false);
              setCSVData(response);

              return response;
            }
          } catch (error) {
            setErrorMessage(error);
            setLoading(false);
            setErrorDialogVisible(true);
          }
          setLoading(false);
        }
      }

      fetchCSVData();
    }
  }, [file]);

  const handleCellChange = (id, key, value) => {
    const nextData = parameters.map((item) => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }

      return item;
    });

    setParameters(nextData);
  };

  async function handleSaveChanges() {
    handleUpdateHeaderIcon("Parameters", "empty");
    // Format the values with scientific notation before saving changes
    const formattedData = parameters.map((item) => ({
      ...item,
      min: scientificNotation(Number(item.min)),
      default: scientificNotation(Number(item.default)),
      max: scientificNotation(Number(item.max)),
    })); // Update the parameters state with the formatted data

    // Save changes logic

    try {
      setSaveLoading(true);
      await overwriteFileInStorage(path, convertToCSV(formattedData));
      setSaveLoading(false);
    } catch (error) {
      setErrorMessage(error);
      setSaveLoading(false);
      setErrorDialogVisible(true);
    }
  }
  const handleUpdateHeaderIcon = (label, newValue) => {
    dispatch(updateTestbenchItem({ label, value: newValue }));
  };

  function handleContinue() {
    setContinueLoading(true);
    // dispatch(setDropdownItem(""));
    if (parameters.length > 0) {
      handleUpdateHeaderIcon("Parameters", "full");
    } else {
      handleUpdateHeaderIcon("Parameters", "empty");
    }

    router.push("optimizer");
    setContinueLoading(false);
  }

  async function handleDeleteChanges() {
    dispatch(removeParameterItem(file));
    handleUpdateHeaderIcon("Parameters", "empty");
    try {
      setDeleteLoading(true);
      await deleteFileFromStorage(path);

      setDeleteLoading(false);
    } catch (error) {
      setErrorMessage(error);
      setDeleteLoading(false);
      setErrorDialogVisible(true);
    }
  }
  return (
    <Container>
      <UploadParametersData type={type} />
      <TableContainer>
        <Table
          // height={500}
          fillHeight={true}
          // autoHeight={true}
          cellBordered={true}
          data={parameters}
          bordered
          loading={loading}
          virtualized
          // rowHeight={150}
          //   affixHeader
          affixHorizontalScrollbar
          // onRowClick={(rowData) => {

          // }}
        >
          {columns &&
            columns.map((column, index) => (
              <Column flexGrow={1} key={index} align='center' fixed>
                <HeaderCell>{column.headerName}</HeaderCell>
                <EditableCell
                  dataKey={column.field}
                  data={parameters}
                  onChange={handleCellChange}
                  // editing={cellEditing[`${row.id}_${column.field}`]}
                />
              </Column>
            ))}
        </Table>
        <Dialog
          style={{ width: "500px", height: "200px", position: "relative" }}
          visible={errorDialogVisible}
          onHide={() => setErrorDialogVisible(false)}
          header={<span style={{ color: "red" }}>Error</span>}
          footer={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Button
                className='black-gray-white'
                onClick={() => setErrorDialogVisible(false)}
              >
                Continue
              </Button>
            </div>
          }
        >
          {errorMessage && <div>{errorMessage.message}</div>}
        </Dialog>
      </TableContainer>
      <ButtonContainer>
        <FilesButton onClick={handleDeleteChanges} className='green-white'>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: !deleteLoading ? "center" : "space-around",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <Oval
              height={20}
              width={20}
              color='#4fa94d'
              wrapperStyle={{}}
              wrapperClass=''
              visible={deleteLoading}
              ariaLabel='oval-loading'
              secondaryColor='#4fa94d'
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
            Delete File
          </div>
        </FilesButton>
        <FilesButton
          onClick={handleSaveChanges}
          className='green-white'
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: !saveLoading ? "center" : "space-around",
            alignItems: "center",
          }}
        >
          <Oval
            height={20}
            width={20}
            color='#4fa94d'
            wrapperStyle={{}}
            wrapperClass=''
            visible={saveLoading}
            ariaLabel='oval-loading'
            secondaryColor='#4fa94d'
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          Save Changes
        </FilesButton>
        <FilesButton
          className='green-white'
          onClick={handleContinue}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: !continueLoading ? "center" : "space-around",
            alignItems: "center",
          }}
        >
          <Oval
            height={20}
            width={20}
            color='#4fa94d'
            wrapperStyle={{}}
            wrapperClass=''
            visible={continueLoading}
            ariaLabel='oval-loading'
            secondaryColor='#4fa94d'
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
          Continue
        </FilesButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  height: calc(100vh - 340px);

  position: relative;
  margin: 00px 20px 0px 20px;
  padding-top: 10px;
  background-color: white;
  /* @media screen and (max-height: 750px) {
    height: 100%;
    background-color: white;
  } */
  @media screen and (max-width: 1200px) {
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const TableContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 0px 0px 0px;
  @media screen and (max-width: 1200px) {
    height: 600px;
  }
`;

const FilesButton = styled.button`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 8px;
  margin-left: 10px;
  transition: background-color 0.1s cubic-bezier();
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 900px) {
    /* width: 80%; */
    font-size: 12px;
    padding: 5px;
  }

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }

  &.green-white {
    width: 150px;
    background-color: #349a77;
    color: #fff;
    border: 1px solid #349a77;
  }

  &.green-white:hover {
    color: #349a77;
    background-color: #fff;
    border: 1px solid #349a77;
    .icon1 {
      color: #349a77;
    }
  }

  &.indigo-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 3px;
    transition: background-color 0.2s ease;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
    width: 80%;
    background-color: #3f51b5;
    color: #fff;
    border: 1px solid #3f51b5;
    @media screen and (max-width: 900px) {
      width: 80%;
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      font-size: 8px;
      padding: 5px;
    }
  }

  &.indigo-white:hover {
    opacity: 0.8;
  }

  &.deeporange-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 3px;
    transition: background-color 0.2s ease;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
    width: 80%;
    background-color: #ff5722;
    color: #fff;
    border: 1px solid #ff5722;
    @media screen and (max-width: 900px) {
      width: 80%;
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      font-size: 8px;
      padding: 5px;
    }
  }

  &.deeporange-white:hover {
    opacity: 0.8;
  }

  &.orange-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 3px;
    transition: background-color 0.2s ease;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
    width: 80%;
    background-color: #e91e63;
    color: #fff;
    border: 1px solid #e91e63;
    @media screen and (max-width: 900px) {
      width: 80%;
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      font-size: 8px;
      padding: 5px;
    }
  }
  &.orange-white:hover {
    opacity: 0.8;
  }
  &.teal-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 3px;
    transition: background-color 0.2s ease;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
    width: 80%;
    background-color: #009688;
    color: #fff;
    border: 1px solid #009688;
    @media screen and (max-width: 900px) {
      width: 80%;
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 8px;
      padding: 5px;
    }
  }
  &.teal-white:hover {
    opacity: 0.8;
  }
`;

const Button = styled.button`
  background-color: #1abc9c;
  border-radius: 4px;
  color: #fff;
  width: 80%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 8px;
  font-weight: 300;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 900px) {
    /* width: 80%; */
    font-size: 12px;
    padding: 5px;
  }

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }

  &.indigo-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 3px;
    /* transition: background-color 0.2s ease; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

    background-color: #3f51b5;
    color: #fff;
    border: 1px solid #3f51b5;
    @media screen and (max-width: 900px) {
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 8px;
      padding: 5px;
    }
  }

  &.indigo-white:hover {
    opacity: 0.8;
  }

  &.deeporange-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 3px;
    /* transition: background-color 0.2s ease; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

    background-color: #ff5722;
    color: #fff;
    border: 1px solid #ff5722;
    @media screen and (max-width: 900px) {
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 8px;
      padding: 5px;
    }
  }

  &.deeporange-white:hover {
    opacity: 0.8;
  }

  &.orange-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 3px;
    /* transition: background-color 0.2s ease; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

    background-color: #e91e63;
    color: #fff;
    border: 1px solid #e91e63;
    @media screen and (max-width: 900px) {
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 8px;
      padding: 5px;
    }
  }
  &.orange-white:hover {
    opacity: 0.8;
  }
  &.teal-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 3px;
    /* transition: background-color 0.2s ease; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

    background-color: #009688;
    color: #fff;
    border: 1px solid #009688;
    @media screen and (max-width: 900px) {
      font-size: 10px;
      padding: 5px;
    }
    @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 8px;
      padding: 5px;
    }
  }
  &.teal-white:hover {
    opacity: 0.8;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: flex-end;
  padding-right: 10px;
  align-items: center;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export default DataGridParameters;
