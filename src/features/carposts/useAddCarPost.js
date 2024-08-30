import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCarPost as addCarPostApi } from "../../services/ridepostsApi";

export function useAddCarPost() {
  const queryClient = useQueryClient();
  const { mutate: addCarPost, isLoading } = useMutation({
    mutationFn: addCarPostApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["car-posts"]);
    },
  });

  return { addCarPost, isLoading };
}
