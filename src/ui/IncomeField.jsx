import { UseCalculator } from "../context/CalculatorContext";

function IncomeField() {
  const { income, setIncome } = UseCalculator();

  return (
    <div>
      <span>App Income</span>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(+e.target.value ? +e.target.value : "")}
      />
    </div>
  );
}

export default IncomeField;
