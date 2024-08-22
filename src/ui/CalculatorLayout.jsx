import { UseCalculator } from "../context/CalculatorContext";
import styled from "styled-components";
import IncomeField from "./IncomeField";
import CommissionField from "./CalcInput";
import Button from "./Button";
import Earnings from "./Earnings";
import CalcInput from "./CalcInput";

const Income = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

function CalculatorLayout() {
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
            <Button>Save</Button>
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
