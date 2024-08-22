import Table from "../../ui/Table";
import CalculatorRow from "./CalculatorRow";
import { useGetCalculatorEntries } from "./useGetCalculatorEntries";
import Spinner from "../../ui/Spinner";

function CalculatorTable() {
  const { calcEntries, isLoading } = useGetCalculatorEntries();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Pub date</div>
        <div>App Income</div>
        <div>Commission</div>
        <div>Expenses</div>
        <div>Earnings</div>
        <div>Actions</div>
      </Table.Header>
      <Table.Body
        data={calcEntries}
        render={(calcEntry) => (
          <CalculatorRow calcEntry={calcEntry} key={calcEntry.id} />
        )}
      />
    </Table>
  );
}

export default CalculatorTable;
