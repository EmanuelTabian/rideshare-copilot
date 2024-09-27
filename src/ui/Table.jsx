import { createContext, useContext } from "react";
import styled from "styled-components";

// Styled components
const StyledTable = styled.div`
  font-size: 1rem;
  overflow: scroll;
  text-align: center;
`;

const ReusableRow = styled.div`
  font-size: 1rem;
  display: grid;
  border-top: 1px solid var(--color-brand-600);
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2rem;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 0.6rem;
    column-gap: 0.2rem;
  }
`;

const StyledHeader = styled(ReusableRow)`
  padding: 1rem 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 480px) {
    padding: 0.2rem;
    font-size: 0.6rem;
    text-transform: capitalize;
  }
`;

const StyledRow = styled(ReusableRow)`
  /* padding: 1rem 1rem; */
`;

const NoData = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin: 2rem;

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
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

function Footer({ children }) {
  return <footer>{children}</footer>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
