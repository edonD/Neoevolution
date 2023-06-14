import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setDropdownItem } from "../../store/slices/parametersDataSlice";

const DropdownMenu = ({ label, items }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    dispatch(setDropdownItem(event.target.value));
  };

  return (
    <Container>
      {label ? (
        <LabelContainer>
          <Label>Model Id</Label>
        </LabelContainer>
      ) : (
        <></>
      )}
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
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {items.map((items) => (
            <MenuItem
              style={{ display: "block" }}
              key={items.name}
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
const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin: 5px 0px 5px 0px;
`;
const Label = styled.span`
  font-size: 16px;
  font-weight: 200;
  color: #353740;
  margin-left: 10px;
`;

export default DropdownMenu;
