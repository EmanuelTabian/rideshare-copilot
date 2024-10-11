import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCalculatorEntry as updateCalculatorEntryApi } from "../../services/ridecalcApi";
import toast from "react-hot-toast";

export function useUpdateCalculatorEntry() {
  const queryClient = useQueryClient();
  const { mutate: updateCalculatorEntry, status } = useMutation({
    mutationFn: updateCalculatorEntryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calc-entries"],
      });
      toast.success("Entry updated successfully!");
    },
  });
  return { updateCalculatorEntry, status };
}
