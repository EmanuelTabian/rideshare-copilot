import { useQuery } from "@tanstack/react-query";
import { getCalculatorEntries } from "../../services/ridecalcApi";

export function useGetCalculatorEntries() {
  const { data: calcEntries, isLoading } = useQuery({
    queryKey: ["calc-entries"],
    queryFn: getCalculatorEntries,
  });

  return { calcEntries, isLoading };
}
