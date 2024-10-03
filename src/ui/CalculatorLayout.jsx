import styled from "styled-components";

import { UseCalculator } from "../context/CalculatorContext";
import IncomeField from "./IncomeField";
import Button from "./Button";
import Earnings from "./Earnings";
import CalcInput from "./CalcInput";
import { useAddCalculatorEntry } from "../features/calculator/useAddCalculatorEntry";

const CalcFields = styled.div`
  padding: 8px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 10rem 5rem;

  @media (min-width: 480px) {
    grid-template-columns: 11rem 15rem;
  }
`;

const StyledButton = styled.button`
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: 10px 10px 10px 10px;
  font-size: 0.75rem;
  font-weight: 900;
  cursor: pointer;

  display: inline;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
    color: white;
  }
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;

const StyledDiv = styled.div`
  margin: 16px 0;
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
    commissionPerc,
    gasExp,
    setGasExp,
    mealsExp,
    setMealsExp,
    otherExp,
    setOtherExp,
    totalExpenses,
    netIncome,
  } = UseCalculator();

  function handleReset() {
    setIncome("");
    setToggle("");
    setRideCom("");
    setEmplCom("");
    setOtherCom("");
    setGasExp("");
    setMealsExp("");
    setOtherExp("");
  }

  function handleAdd() {
    const calcData = {
      app_income: String(income),
      commission: String(commissionPerc),
      expenses: String(totalExpenses),
      earnings: String(netIncome),
    };

    addCalculatorEntry({ calcData });
  }

  function handleToggle() {
    setToggle((t) => !t);
  }

  return (
    <div>
      <CalcFields>
        <IncomeField />
        <CalcInput value={rideCom} setValue={setRideCom}>
          Rideshare commission (%):
        </CalcInput>
        <CalcInput value={emplCom} setValue={setEmplCom}>
          Employer commission (%):
        </CalcInput>
        <CalcInput value={otherCom} setValue={setOtherCom}>
          Other Commission:
        </CalcInput>
      </CalcFields>
      {income && (
        <StyledDiv>
          <StyledButton onClick={handleToggle}>
            {toggle ? "Close" : " Expenses"}
          </StyledButton>
          <StyledButton onClick={handleReset}>Reset</StyledButton>
          <StyledButton onClick={handleAdd}>Save</StyledButton>
        </StyledDiv>
      )}
      {toggle && (
        <CalcFields>
          <CalcInput value={gasExp} setValue={setGasExp}>
            Gas
          </CalcInput>
          <CalcInput value={mealsExp} setValue={setMealsExp}>
            Meals
          </CalcInput>
          <CalcInput value={otherExp} setValue={setOtherExp}>
            Cash
          </CalcInput>
        </CalcFields>
      )}
      <Earnings />
    </div>
  );
}

export default CalculatorLayout;
