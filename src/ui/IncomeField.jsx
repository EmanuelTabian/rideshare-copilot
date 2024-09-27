import styled from "styled-components";
import { UseCalculator } from "../context/CalculatorContext";

const Input = styled.input`
  border: none;
  border-radius: 8px;
  background-color: var(--color-brand-700);
`;

function IncomeField() {
  const { income, setIncome } = UseCalculator();

  return (
    <>
      <span>App Income:</span>
      <Input
        type="number"
        placeholder="Income"
        value={income}
        onChange={(e) => setIncome(+e.target.value ? +e.target.value : "")}
      />
    </>
  );
}

export default IncomeField;
