import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
const { Column, HeaderCell, Cell } = Table;
import { Checkbox, Table } from "rsuite";
import UploadReferenceData from "../Reference-Data-View/UploadReferenceData";
import "rsuite/dist/rsuite-no-reset.min.css";
import { scientificNotation } from "../Parameters-Data-View/CSVProcessor";
import { Oval } from "react-loader-spinner";
import { updateTestbenchItem } from "../../../store/slices/headerIconsSlice";
import {
  removeReferenceDataItem,
  selectedReferenceData,
} from "../../../store/slices/referenceDataSlice";
import {
  deleteFileFromStorage,
  overwriteFileInStorage,
  retrieveJSONFromS3,
} from "../../Storage/UploadFileFunctions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { selectUserNameId } from "../../../store/slices/userSlice";
import {
  setJSONInstanceParameters,
  setTableColumns,
  setTableValues,
} from "../Reference-Data-View/JSONProcessor";
import { json } from "react-router-dom";
import { currentProject } from "../../../store/slices/projectListSlice";
import { currentModel } from "../../../store/slices/modelListSlice";

const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
  const [editing, setEditing] = useState(false);
  const [displayValue, setDisplayValue] = useState(rowData[dataKey]);

  // const handleBlur = () => {
  //   setEditing(false);
  //   onChange && onChange(rowData.id, dataKey, displayValue);
  // };

  // const handleChange = (event) => {
  //   setDisplayValue(event.target.value);
  // };
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
  const formatSmallNumbers = (number) => {
    const formatted = number.toLocaleString(undefined, {
      minimumFractionDigits: 10,
    });
    return formatted.replace(/\.?0+$/, "");
    return value;
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
        <span
          style={{
            fontSize: "0.8rem",
          }}
        >
          {rowData[dataKey]}
        </span>
      )}
    </Cell>
  );

  // const formatSmallNumbers = (number) => {
  //   const formatted = number.toLocaleString(undefined, {
  //     minimumFractionDigits: 10,
  //   });
  //   return formatted.replace(/\.?0+$/, "");
  //   return value;
  // };
  // const handleClick = () => {
  //   if (!editing) {
  //     const value = Number(rowData[dataKey]);

  //     const display =
  //       (value < 0.001 && value > 0.0000000001) ||
  //       (value > -0.001 && value < -0.0000000001)
  //         ? formatSmallNumbers(value)
  //         : scientificNotation(value);
  //     setDisplayValue(display);
  //     setEditing(true);
  //   }
  // };

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

const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        lineHeight: "46px",
        diplay: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Checkbox
        value={rowData[dataKey]}
        onChange={onChange}
        checked={checkedKeys.some((item) => item === rowData[dataKey])}
      />
    </div>
  </Cell>
);
// ];
function DataGridSecond({ type, items, callback }) {
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [checkedKeys, setCheckedKeys] = React.useState([]);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [continueLoading, setContinueLoading] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const [table, setTable] = useState([]);
  const [columns, setColumns] = useState([]);
  const file = useSelector(selectedReferenceData);
  const usernameID = useSelector(selectUserNameId);
  const router = useRouter();
  const dispatch = useDispatch();

  let checked = false;
  let indeterminate = false;

  if (table && checkedKeys.length === table.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (
    table &&
    checkedKeys.length > 0 &&
    checkedKeys.length < table.length
  ) {
    indeterminate = true;
  }

  const project = useSelector(currentProject);
  const model = useSelector(currentModel);

  const userId = usernameID; // Replace with the actual user ID.
  const projectId = project;
  const modelId = model;

  const folderName = "Reference Data"; // Replace with the desired folder name
  const subPath = `${userId}/${projectId}/${modelId}`;
  const path = `${subPath}/${folderName}/${file}`;

  const { projectName, modelName } = router.query;

  useEffect(() => {
    async function fetchJSONData() {
      // const path = `${usernameID}/${folderName}/${file}`;

      try {
        const response = await retrieveJSONFromS3(path);

        if (response) {
          setJsonData(response);
          return response;
        }
      } catch (error) {
        console.error("FETCHING", error);
      }
    }
    fetchJSONData();
  }, [file, usernameID]);

  useEffect(() => {
    if (jsonData) {
      const table = setTableValues(jsonData.data);

      setTable(table);
    }
  }, [jsonData]);

  useEffect(() => {
    if (jsonData) {
      const columns = setTableColumns(jsonData.data);

      setColumns(columns);
    }
  }, [jsonData]);

  useEffect(() => {
    handleSelectionModelChange(checkedKeys);
  }, [checkedKeys]);

  const handleCheckAll = (value, checked) => {
    const keys = checked ? table.map((item) => item.id) : [];
    setCheckedKeys(keys);
    // handleSelectionModelChange(checkedKeys);
  };
  const handleCheck = (value, checked) => {
    const keys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value);
    setCheckedKeys(keys);
    // handleSelectionModelChange(checkedKeys);
  };

  const handleSelectionModelChange = (newSelectionModel) => {
    setSelectionModel(newSelectionModel);
    callback(newSelectionModel);
  };

  async function handleSaveChanges() {
    // Save changes logic
    handleUpdateHeaderIcon("Reference Data", "empty");
    setJSONInstanceParameters(jsonData, table);
    try {
      setSaveLoading(true);
      await overwriteFileInStorage(
        path,
        setJSONInstanceParameters(jsonData, table)
      );
      setSaveLoading(false);
    } catch (error) {
      // setErrorMessage(error);
      setSaveLoading(false);
      // setErrorDialogVisible(true);
    }
  }

  const handleUpdateHeaderIcon = (label, newValue) => {
    dispatch(updateTestbenchItem({ label, value: newValue }));
  };

  function handleContinue() {
    setContinueLoading(true);

    // dispatch(setDropdownItem(""));
    if (table && table.length > 0) {
      handleUpdateHeaderIcon("Reference Data", "full");
      console.log("Array is not empty");
    } else {
      handleUpdateHeaderIcon("Reference Data", "empty");
      console.log("Array is empty");
    }

    router.push(`/projects/${projectName}/${modelName[0]}/insert-data/model`);
    setContinueLoading(false);
  }

  async function handleDeleteChanges() {
    dispatch(removeReferenceDataItem(file));
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

  const handleCellChange = (id, key, value) => {
    const nextData = table.map((item) => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }

      return item;
    });

    setTable(nextData);
  };

  return (
    <Container>
      <UploadReferenceData type={type} items={items} />

      <Data>
        <Table
          // height={100}
          fillHeight
          className='custom-table'
          cellBordered
          data={table}
          bordered
          // autoHeight
          // loading={loading}
          // virtualized
          // rowHeight={150}
          // affixHeader
          affixHorizontalScrollbar={false}
          // onRowClick={(rowData) => {
          //   console.log(rowData);
          // }}
        >
          <Column align='center' width={50} fixed>
            <HeaderCell style={{ padding: 0 }}>
              <Checkbox
                // inline
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleCheckAll}
              />
            </HeaderCell>
            <CheckCell
              dataKey='id'
              checkedKeys={checkedKeys}
              onChange={handleCheck}
            />
          </Column>
          {columns &&
            columns.map((column, index) => (
              <Column
                key={index}
                align='center'
                fixed='right'
                fullText
                flexGrow={1}
              >
                <HeaderCell>{column}</HeaderCell>

                <EditableCell
                  dataKey={column}
                  data={table}
                  onChange={handleCellChange}
                  // editing={cellEditing[`${row.id}_${column.field}`]}
                />
              </Column>
            ))}
        </Table>
      </Data>
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
              height={10}
              width={10}
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
            height={10}
            width={10}
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
            height={10}
            width={10}
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
  /* height: calc(100vh - 200px); */
  height: 100%;
  /* padding-left: 20px; */
  position: relative;
  border: 1px solid #e5e5ea;
  border-radius: 15px;
  overflow: hidden;
  &.custom-table {
    width: 100%;
    background-color: yellow;
  }
  @media screen and (max-height: 750px) {
    /* height: calc(100vh - 200px); */
    background-color: white;
  }
  @media screen and (max-width: 1200px) {
    /* height: calc(100vh - 200px); */
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
const Data = styled.div`
  height: calc(50vh - 80px);
  /* height: 100%; */
  background-color: transparent;
  width: 100%;

  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */

  @media screen and (max-width: 1200px) and (max-height: 750px) {
    height: 100%;
  }
  /* margin: 10px; */
`;

export default DataGridSecond;
