import EarningsGraph from "../../ui/EarningsGraph";
import Spinner from "../../ui/Spinner";
import { useGetRecentCalculatorEntries } from "./useGetRecentCalculatorEntries";

function DashboardLayout() {
  const { recentEntries, isLoading } = useGetRecentCalculatorEntries();
  if (isLoading) return <Spinner />;

  return (
    <>
      <EarningsGraph recentEntries={recentEntries} />
    </>
  );
}

export default DashboardLayout;
