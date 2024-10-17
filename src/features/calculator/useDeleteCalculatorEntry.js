import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCalculatorEntry as deleteCalculatorEntryAPI } from "../../services/ridecalcApi";
import toast from "react-hot-toast";

export function useDeleteCalaculatorEntry() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteCalculatorEntry } = useMutation({
    mutationFn: deleteCalculatorEntryAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calc-entries"] });
      queryClient.refetchQueries({ queryKey: ["calc-entries"] });
      toast.success("Entry deleted successfully!");
    },
  });

  return { isLoading, deleteCalculatorEntry };
}
