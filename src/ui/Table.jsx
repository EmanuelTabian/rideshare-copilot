import { createContext, useContext } from "react";
import styled from "styled-components";

// Styled components
const StyledTable = styled.div`
  border: 1px solid black;
  font-size: 1rem;
  overflow: scroll;
  text-align: center;
`;

const ReusableRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2rem;
  align-items: center;
`;

const StyledHeader = styled(ReusableRow)`
  padding: 1.5rem 1.5rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const StyledRow = styled(ReusableRow)`
  padding: 1rem 1rem;
`;

const NoData = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin: 2rem;
`;

// Compound component originally designed by Jonas Schmedtmann and adapted to current project.
const TableContext = createContext();

function Table({ $columns, children }) {
  return (
    <TableContext.Provider value={{ $columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { $columns } = useContext(TableContext);
  return <StyledHeader $columns={$columns}>{children}</StyledHeader>;
}

function Row({ children }) {
  const { $columns } = useContext(TableContext);
  return <StyledRow $columns={$columns}>{children}</StyledRow>;
}

function Body({ data, render }) {
  if (!data.length)
    return <NoData>You have no calculator entries! Save one!</NoData>;
  return <section>{data.map(render)}</section>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
