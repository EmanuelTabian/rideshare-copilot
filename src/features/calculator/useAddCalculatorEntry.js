import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCalculatorEntry as addCalculatorEntryApi } from "../../services/ridecalcApi";
import toast from "react-hot-toast";

export function useAddCalculatorEntry() {
  const queryClient = useQueryClient();
  const { mutate: addCalculatorEntry, status } = useMutation({
    mutationFn: addCalculatorEntryApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calc-entries"] }),
        toast.success("Entry added successfully!");
    },
  });

  return { addCalculatorEntry, status };
}
