import styled from "styled-components";
import EarningsGraph from "../../ui/EarningsGraph";
import Message from "../../ui/Message";
import Spinner from "../../ui/Spinner";
import { useGetRecentCalculatorEntries } from "./useGetRecentCalculatorEntries";

const StyledGraph = styled.div`
  margin-right: 16px;
`;

function DashboardLayout() {
  const { recentEntries, isLoading } = useGetRecentCalculatorEntries();
  if (isLoading) return <Spinner />;

  return (
    <StyledGraph>
      {recentEntries.length >= 2 ? (
        <EarningsGraph recentEntries={recentEntries} />
      ) : (
        <Message>
          Not enough calculator entries to generate statistics! Please provide
          at least 2!
        </Message>
      )}
    </StyledGraph>
  );
}

export default DashboardLayout;
