import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCalculatorEntry as deleteCalculatorEntryAPI } from "../../services/ridecalcApi";
export function useDeleteCalaculatorEntry() {
  const queryClient = useQueryClient();
  const { mutate: deleteCalculatorEntry, isLoading } = useMutation({
    mutationFn: deleteCalculatorEntryAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["calc-entries"]);
    },
  });

  return { deleteCalculatorEntry, isLoading };
}
