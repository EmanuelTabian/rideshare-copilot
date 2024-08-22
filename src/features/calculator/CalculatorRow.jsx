import Table from "../../ui/Table";
import TableRowActions from "../../ui/TableRowActions";
import { dateFormatter } from "../../utils/helpers";

function CalculatorRow({ calcEntry }) {
  const {
    pub_date: pubDate,
    app_income: appIncome,
    commission,
    expenses,
    earnings,
  } = calcEntry;

  return (
    <Table.Row>
      <div>{dateFormatter(pubDate)}</div>
      <div>{appIncome}</div>
      {commission ? <div>{Math.round(commission)}%</div> : <span>&mdash;</span>}
      {expenses ? <div>{expenses}</div> : <span>&mdash;</span>}
      {earnings ? <div>{earnings}</div> : <span>&mdash;</span>}
      <TableRowActions />
    </Table.Row>
  );
}

export default CalculatorRow;
