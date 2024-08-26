import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCalculatorEntry as deleteCalculatorEntryAPI } from "../../services/ridecalcApi";
export function useDeleteCalaculatorEntry() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteCalculatorEntry } = useMutation({
    mutationFn: deleteCalculatorEntryAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calc-entries"] });
      queryClient.refetchQueries({ queryKey: ["calc-entries"] });
    },
  });

  return { isLoading, deleteCalculatorEntry };
}
