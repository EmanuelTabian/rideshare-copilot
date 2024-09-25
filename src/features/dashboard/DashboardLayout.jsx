import EarningsGraph from "../../ui/EarningsGraph";
import Spinner from "../../ui/Spinner";
import { useGetRecentCalculatorEntries } from "./useGetRecentCalculatorEntries";

function DashboardLayout() {
  const { recentEntries, isLoading } = useGetRecentCalculatorEntries();

  if (isLoading) return <Spinner />;
  console.log(recentEntries);
  return (
    <>
      <EarningsGraph />
    </>
  );
}

export default DashboardLayout;
