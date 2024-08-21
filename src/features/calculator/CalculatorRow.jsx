import Table from "../../ui/Table";

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
      <div>{pubDate}</div>
      <div>{appIncome}</div>
      <div>{commission}</div>
      <div>{expenses}</div>
      <div>{earnings}</div>
    </Table.Row>
  );
}

export default CalculatorRow;
