import Table from "../../ui/Table";

function CalculatorRow({ calcEntry }) {
  const {
    id,
    pub_date: pubDate,
    app_income: appIncome,
    commission,
    expenses,
    earnings,
  } = calcEntry;

  return (
    <Table.Row>
      <div>{id}</div>
    </Table.Row>
  );
}

export default CalculatorRow;
