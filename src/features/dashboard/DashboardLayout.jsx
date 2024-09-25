import EarningsGraph from "../../ui/EarningsGraph";
import Spinner from "../../ui/Spinner";
import { useGetCalculatorEntries } from "../calculator/useGetCalculatorEntries";

function DashboardLayout() {
  const { calcEntries, isLoading } = useGetCalculatorEntries();

  if (isLoading) return <Spinner />;
  return (
    <>
      <EarningsGraph calcEntries={calcEntries} />
    </>
  );
}

export default DashboardLayout;
