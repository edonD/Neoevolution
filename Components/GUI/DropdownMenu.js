import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const DropdownMenu = ({ items, label }) => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
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
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: "200px",
                overflowY: "auto",
              },
            },
          }}
        >
          {items.map((items) => (
            <MenuItem
              style={{ display: "block" }}
              key={items.value}
              value={items.value}
            >
              {items.label}
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
