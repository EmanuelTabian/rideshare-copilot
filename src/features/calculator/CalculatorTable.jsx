import { calcEntriesData } from "../../data/calcEntriesData";
import Table from "../../ui/Table";
import CalculatorRow from "./CalculatorRow";

function CalculatorTable() {
  const calcData = calcEntriesData;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Pub date</div>
        <div>App Income</div>
        <div>Commission</div>
        <div>Expenses</div>
        <div>Earnings</div>
      </Table.Header>
      <Table.Body
        data={calcData}
        render={(calcEntry) => (
          <CalculatorRow calcEntry={calcEntry} key={calcEntry.id} />
        )}
      />
    </Table>
  );
}

export default CalculatorTable;
