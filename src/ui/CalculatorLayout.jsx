import styled from "styled-components";

import { UseCalculator } from "../context/CalculatorContext";
import IncomeField from "./IncomeField";
import Button from "./Button";
import Earnings from "./Earnings";
import CalcInput from "./CalcInput";
import { useAddCalculatorEntry } from "../features/calculator/useAddCalculatorEntry";

const Income = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

function CalculatorLayout() {
  const { addCalculatorEntry, isLoading } = useAddCalculatorEntry();

  const {
    income,
    setIncome,
    toggle,
    setToggle,
    rideCom,
    setRideCom,
    emplCom,
    setEmplCom,
    otherCom,
    setOtherCom,
    gasExp,
    setGasExp,
    mealsExp,
    setMealsExp,
    otherExp,
    setOtherExp,
  } = UseCalculator();

  function handleReset() {
    setIncome("");
    setToggle("");
    setEmplCom("");
    setOtherCom("");
    setGasExp("");
    setMealsExp("");
    setOtherExp("");
  }
  function handleAdd() {
    console.log("click");

    addCalculatorEntry({ income });
  }

  function handleToggle() {
    setToggle((t) => !t);
  }

  return (
    <div>
      <Income>
        <IncomeField />
        <CalcInput value={rideCom} setValue={setRideCom}>
          Rideshare commission (%)
        </CalcInput>
        <CalcInput value={emplCom} setValue={setEmplCom}>
          Employer commission (%)
        </CalcInput>
        <CalcInput value={otherCom} setValue={setOtherCom}>
          Other Commission
        </CalcInput>
        {income && (
          <div>
            <Button onClick={handleToggle}>
              {toggle ? "Close" : " Expenses"}
            </Button>
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={handleAdd}>Save</Button>
          </div>
        )}
      </Income>
      {toggle && (
        <div>
          <CalcInput value={gasExp} setValue={setGasExp}>
            Gas
          </CalcInput>
          <CalcInput value={mealsExp} setValue={setMealsExp}>
            Meals
          </CalcInput>
          <CalcInput value={otherExp} setValue={setOtherExp}>
            Cash
          </CalcInput>
        </div>
      )}
      <Earnings />
    </div>
  );
}

export default CalculatorLayout;
