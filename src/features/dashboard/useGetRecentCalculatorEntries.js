import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export async function getRecentCalculatorEntries() {
  const [searchParams] = useSearchParams();
  // Event though the backend sets a clause for a 7 default value, this will also be set on the frontend
  const days = searchParams.get("days") || 7;
  const { data: recentEntries, isLoading } = useQuery({
    queryKey: ["recentEntries", days],
    queryFn: () => getRecentCalculatorEntries(days),
  });
  return { recentEntries, isLoading };
}
