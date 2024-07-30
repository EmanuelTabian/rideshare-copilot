import { UseCalculator } from "../context/CalculatorContext";
import styled from "styled-components";
import IncomeField from "./IncomeField";
import CommissionField from "./CommissionField";

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
        <CommissionField trackValue={rideCom} setValue={setRideCom}>
          Rideshare commission (%)
        </CommissionField>
        <CommissionField trackValue={emplCom} setValue={setEmplCom}>
          Employer commission (%)
        </CommissionField>
        <CommissionField trackValue={otherCom} setValue={setOtherCom}>
          Other Commission
        </CommissionField>
        {income && (
          <div>
            <Button onClick={handleToggle}>
              {toggle ? "Close" : " Expenses"}
            </Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        )}
      </Income>
      {toggle && (
        <ExpenseForm>
          <ExpenseField value={gasExp} setValue={setGasExp}>
            Gas
          </ExpenseField>
          <ExpenseField value={mealsExp} setValue={setMealsExp}>
            Meals
          </ExpenseField>
          <ExpenseField value={otherExp} setValue={setOtherExp}>
            Cash
          </ExpenseField>
        </ExpenseForm>
      )}
      <Output />
    </div>
  );
}

export default CalculatorLayout;
