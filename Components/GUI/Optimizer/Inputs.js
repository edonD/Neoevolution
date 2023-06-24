import React from "react";

import styled from "styled-components";
import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import { InputNumber } from "primereact/inputnumber";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAdvancedOptionsItems,
  getAdvancedOptionsDefaultValues,
} from "../../../store/slices/advancedOptionsSlice";
import { useState } from "react";
import { useEffect } from "react";

function Inputs() {
  const defaultValues = useSelector(getAdvancedOptionsDefaultValues);

  const [populationSize, setPopulationSize] = useState(0);
  const [numberOfIterations, setNumberOfIterations] = useState(0);
  const [
    numberOfIterationsWithoutImprovement,
    setNumberOfIterationsWithoutImprovement,
  ] = useState(0);
  const [goodEnoughMetric, setGoodEnoughMetric] = useState(0);

  const dispatch = useDispatch();
  const handleUpdateItem = (label, value) => {
    switch (label) {
      case "Population Size":
        setPopulationSize(value);
        break;

      case "Number of Iterations":
        setNumberOfIterations(value);
        break;

      case "Number of Iterations without improvemet":
        setNumberOfIterationsWithoutImprovement(value);
        break;

      case "Good enough metric":
        setGoodEnoughMetric(value);
        break;

      default:
        break;
    }
    dispatch(updateAdvancedOptionsItems({ label, value }));
  };

  useEffect(() => {
    setPopulationSize(defaultValues[0].value);
    setNumberOfIterations(defaultValues[1].value);
    setNumberOfIterationsWithoutImprovement(defaultValues[2].value);
    setGoodEnoughMetric(defaultValues[3].value);
  }, [defaultValues]);

  return (
    <Container>
      <Fieldset
        legend='Advanced Options'
        toggleable
        collapsed
        style={{
          border: "1px solid #ededed",
          borderRadius: "15px",
          margin: "5px",
        }}
      >
        <Card>
          <FieldGrid>
            <Label htmlFor='PS'>Population Size</Label>
            <InputWrapper>
              <InputNumber
                value={populationSize}
                onValueChange={(e) =>
                  handleUpdateItem("Population Size", e.value)
                }
                useGrouping={false}
                style={{ width: "100%" }}
                id='name3'
                type='text'
              />
            </InputWrapper>
          </FieldGrid>
          <FieldGrid>
            <Label htmlFor='NI'>Number of Iterations</Label>
            <InputWrapper>
              <InputNumber
                value={numberOfIterations}
                onValueChange={(e) =>
                  handleUpdateItem("Number of Iterations", e.value)
                }
                useGrouping={false}
                style={{ width: "100%" }}
                id='name3'
                type='text'
              />
            </InputWrapper>
          </FieldGrid>
          <FieldGrid>
            <Label htmlFor='NIwI'>
              Number of Iterations without improvemet
            </Label>
            <InputWrapper>
              <InputNumber
                value={numberOfIterationsWithoutImprovement}
                onValueChange={(e) =>
                  handleUpdateItem(
                    "Number of Iterations without improvemet",
                    e.value
                  )
                }
                useGrouping={false}
                style={{ width: "100%" }}
                id='name3'
                type='text'
              />
            </InputWrapper>
          </FieldGrid>
          <FieldGrid>
            <Label htmlFor='GEM'>Good enough metric</Label>
            <InputWrapper>
              <InputNumber
                value={goodEnoughMetric}
                onValueChange={(e) =>
                  handleUpdateItem("Good enough metric", e.value)
                }
                useGrouping={false}
                style={{ width: "100%" }}
                id='email3'
                type='text'
              />
            </InputWrapper>
          </FieldGrid>
        </Card>
      </Fieldset>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Card = styled.div`
  padding: 0.75rem;
  background-color: #ffffff;
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 0.35fr 0.65fr;
  margin: 0.5rem 0;
  align-items: center;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  /* Add your styles for the label here */
  font-weight: 200;
  margin-right: 10px;
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;

const InputWrapper = styled.div`
  /* Add your styles for the input wrapper here */
  width: 100%;
`;
export default Inputs;
