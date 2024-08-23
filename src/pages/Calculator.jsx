import { UseCalculatorContext } from "../context/CalculatorContext";
import CalculatorTable from "../features/calculator/CalculatorTable";
import CalculatorLayout from "../ui/CalculatorLayout";

function Calculator() {
  return (
    <>
      <UseCalculatorContext>
        <CalculatorLayout />
        <CalculatorTable />
      </UseCalculatorContext>
    </>
  );
}

export default Calculator;
