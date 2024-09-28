import styled from "styled-components";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

const FlexContainer = styled.div`
  @media (min-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function Dashboard() {
  return (
    <>
      <FlexContainer>
        <h1>Dashboard</h1>
        <DashboardFilter />
      </FlexContainer>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
