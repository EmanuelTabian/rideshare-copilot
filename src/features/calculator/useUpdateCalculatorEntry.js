import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCalculatorEntry as updateCalculatorEntryApi } from "../../services/ridecalcApi";

export function useUpdateCalculatorEntry() {
  const queryClient = useQueryClient();
  const { mutate: updateCalculatorEntry, isLoading } = useMutation({
    mutationFn: updateCalculatorEntryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calc-entries"],
      });
    },
  });
  return { updateCalculatorEntry, isLoading };
}
