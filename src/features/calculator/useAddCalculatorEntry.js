import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCalculatorEntry as addCalculatorEntryApi } from "../../services/ridecalcApi";

export function useAddCalculatorEntry() {
  const queryClient = useQueryClient();
  const { mutate: addCalculatorEntry, isLoading } = useMutation({
    mutationFn: addCalculatorEntryApi,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["calc-entries"] }),
  });

  return { addCalculatorEntry, isLoading };
}
