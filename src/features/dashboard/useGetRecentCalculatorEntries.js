import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getRecentCalculatorEntries } from "../../services/ridecalcApi";

export function useGetRecentCalculatorEntries() {
  const [searchParams] = useSearchParams();
  // Event though the backend sets a clause for a 7 default value, this will also be set on the frontend
  const days = searchParams.get("last") || 7;

  const { data: recentEntries, isLoading } = useQuery({
    queryKey: ["recentEntries", days],
    queryFn: () => getRecentCalculatorEntries(days),
  });
  return { recentEntries, isLoading };
}
