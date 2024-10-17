import styled from "styled-components";

import Table from "../../ui/Table";
import CalculatorRow from "./CalculatorRow";
import { useGetCalculatorEntries } from "./useGetCalculatorEntries";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

const SpinnerContainer = styled.div`
  overflow: hidden;
  margin: 8px;
  display: flex;
  justify-content: center;
`;

function CalculatorTable() {
  const { calcEntries, isLoading } = useGetCalculatorEntries();
  // if (isLoading) return;
  return (
    <Table $columns="1fr 1fr 1fr 1fr 1fr 1fr">
      <div>
        <Table.Header>
          <div>Pub date</div>
          <div>App Income</div>
          <div>Commission</div>
          <div>Expenses</div>
          <div>Earnings</div>
          <div>Actions</div>
        </Table.Header>
        {isLoading ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <Table.Body
            data={calcEntries.data}
            render={(calcEntry) => (
              <CalculatorRow calcEntry={calcEntry} key={calcEntry.id} />
            )}
          />
        )}
      </div>
      {!Boolean(calcEntries?.data.length) || isLoading ? (
        ""
      ) : (
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
