import EarningsGraph from "../../ui/EarningsGraph";
import Message from "../../ui/Message";
import Spinner from "../../ui/Spinner";
import { useGetRecentCalculatorEntries } from "./useGetRecentCalculatorEntries";

function DashboardLayout() {
  const { recentEntries, isLoading } = useGetRecentCalculatorEntries();
  if (isLoading) return <Spinner />;

  return (
    <>
      {recentEntries.length >= 2 ? (
        <EarningsGraph recentEntries={recentEntries} />
      ) : (
        <Message>
          Not enough calculator entries to generate statistics! Please provide
          at least 2!
        </Message>
      )}
    </>
  );
}

export default DashboardLayout;
