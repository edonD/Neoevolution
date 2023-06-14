import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  setDropdownItem,
  selectDropdownItem,
} from "../../store/slices/parametersDataSlice";

const DropdownMenu = ({ items }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const dropDownItem = useSelector(selectDropdownItem);

  useEffect(() => {
    // Check if the selected option is still available in the items array
    const selectedItem = items.find((item) => {
      console.log("Item", item);
      console.log("Selected Option", selectedOption);
      item.name === selectedOption;
    });
    console.log("Selected Item", selectedItem);
    if (selectedItem !== undefined && items.length > 0) {
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

export default DropdownMenu;
