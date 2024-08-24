import { UseCalculatorContext } from "../context/CalculatorContext";
import { TableCalculatorProvider } from "../context/TableCalculatorContext";
import CalculatorTable from "../features/calculator/CalculatorTable";
import CalculatorLayout from "../ui/CalculatorLayout";

function Calculator() {
  return (
    <>
      <UseCalculatorContext>
        <CalculatorLayout />
      </UseCalculatorContext>
      <TableCalculatorProvider>
        <CalculatorTable />
      </TableCalculatorProvider>
    </>
  );
}

export default Calculator;
