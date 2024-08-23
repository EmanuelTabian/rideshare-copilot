import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCalculatorEntry as updateCalculatorEntryApi } from "../../services/ridecalcApi";

export function useUpdateCalculatorEntry() {
  const queryClient = useQueryClient();
  const { mutate: updateCalaculatorEntry, isLoading } = useMutation({
    mutationFn: ({ calcData, calcID }) =>
      updateCalculatorEntryApi(calcData, calcID),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calc-entries"],
      });
    },
  });
  return { updateCalaculatorEntry, isLoading };
}
