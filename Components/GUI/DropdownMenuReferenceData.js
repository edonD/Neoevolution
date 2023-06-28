import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  selectReferenceDataItems,
  setReferenceDataItems,
  setDropdownItem,
  selectedReferenceData,
  cleanAllStatesReferenceData,
} from "../../store/slices/referenceDataSlice";
import { selectUserNameId } from "../../store/slices/userSlice";
import { listFiles } from "../Storage/UploadFileFunctions";
import { currentProject } from "../../store/slices/projectListSlice";
import { currentModel } from "../../store/slices/modelListSlice";

const DropDownMenuReferenceData = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const items = useSelector(selectReferenceDataItems);
  const dropDownItem = useSelector(selectedReferenceData);
  const usernameID = useSelector(selectUserNameId);

  const project = useSelector(currentProject);
  const model = useSelector(currentModel);

  const userId = usernameID; // Replace with the actual user ID.
  const projectId = project;
  const modelId = model;

  const subPath = `${userId}/${projectId}/${modelId}`;

  const ReferenceDataLink = `${subPath}/Reference Data`;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReferenceData = async () => {
      // dispatch(cleanAllStatesReferenceData());
      try {
        const files = await listFiles(ReferenceDataLink);

        files.map((file) => {
          const result = file.key.replace(/.*\//, "");

          dispatch(setReferenceDataItems(result));
        });
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };
    fetchReferenceData();
  }, []);

  useEffect(() => {
    // Check if the selected option is still available in the items array

    const selectedItem = items.find((item) => selectedOption === item.name);

    if (
      selectedItem === undefined &&
      items.length > 0 &&
      selectedOption === dropDownItem
    ) {
      // If the selected option is not available, select the first item in the array

      setSelectedOption(items[0].name);
      dispatch(setDropdownItem(items[0].name));
    }

    if (selectedOption !== dropDownItem) {
      setSelectedOption(dropDownItem);
    }
  }, [items, selectedOption]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(setDropdownItem(event.target.value));
  };

  return (
    <Container>
      <FormControl fullWidth margin='normal'>
        <Select
          labelId='dropdown-label'
          value={selectedOption}
          onChange={handleSelectChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: "200px",
                overflowY: "auto",
              },
            },
          }}
        >
          <MenuItem disabled value=''>
            <em>Select File</em>
          </MenuItem>
          {items.map((items) => (
            <MenuItem
              style={{ display: "block" }}
              key={items.value}
              value={items.name}
            >
              <span> {items.name}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default DropDownMenuReferenceData;
