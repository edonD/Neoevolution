import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const options = [
  { label: "NMOS-BSIM4", value: "option1" },
  { label: "PMOS-BSIM4", value: "option2" },
  { label: "PMOS-HiSIM", value: "option3" },
  { label: "NMOS-HiSIM", value: "option4" },
  { label: "Diode", value: "option5" },
  { label: "Capacitor", value: "option6" },
  { label: "Resistor", value: "option7" },
];

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <LabelContainer>
        <Label>Model Id</Label>
      </LabelContainer>
      <FormControl fullWidth>
        <Select
          labelId='dropdown-label'
          value={selectedOption}
          onChange={handleSelectChange}
          // displayEmpty
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

const Container = styled.div`
  height: fit-content;
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
