import { UseCalculatorContext } from "../context/CalculatorContext";
import CalculatorLayout from "../ui/CalculatorLayout";

function Calculator() {
  return (
    <UseCalculatorContext>
      <CalculatorLayout />;
    </UseCalculatorContext>
  );
}

export default Calculator;
