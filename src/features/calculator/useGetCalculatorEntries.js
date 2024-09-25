import { useQuery } from "@tanstack/react-query";
import { getCalculatorEntries } from "../../services/ridecalcApi";
import { useSearchParams } from "react-router-dom";

export function useGetCalculatorEntries() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? "1" : searchParams.get("page");
  const { isLoading, data: calcEntries } = useQuery({
    queryKey: ["calc-entries", page],
    queryFn: () => getCalculatorEntries(page),
  });

  return { calcEntries, isLoading };
}
