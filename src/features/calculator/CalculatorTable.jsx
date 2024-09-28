import Table from "../../ui/Table";
import CalculatorRow from "./CalculatorRow";
import { useGetCalculatorEntries } from "./useGetCalculatorEntries";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import styled from "styled-components";

const TableLowWidth = styled.div``;

function CalculatorTable() {
  const { calcEntries, isLoading } = useGetCalculatorEntries();

  if (isLoading) return <Spinner />;

  return (
    <Table $columns="1fr 1fr 1fr 1fr 1fr 1fr">
      <TableLowWidth>
        <Table.Header>
          <div>Pub date</div>
          <div>App Income</div>
          <div>Commission</div>
          <div>Expenses</div>
          <div>Earnings</div>
          <div>Actions</div>
        </Table.Header>
        <Table.Body
          data={calcEntries.data}
          render={(calcEntry) => (
            <CalculatorRow calcEntry={calcEntry} key={calcEntry.id} />
          )}
        />
      </TableLowWidth>
      {Boolean(calcEntries.data.length) && (
        <Table.Footer>
          <Pagination
            pageLength={calcEntries.data.length}
            count={calcEntries.count}
            pagination={calcEntries.pagination}
          />
        </Table.Footer>
      )}
    </Table>
  );
}

export default CalculatorTable;
