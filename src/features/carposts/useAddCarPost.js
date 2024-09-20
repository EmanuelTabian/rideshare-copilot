import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCarPost as addCarPostApi } from "../../services/ridepostsApi";

export function useAddCarPost() {
  const queryClient = useQueryClient();
  const {
    mutate: addCarPost,
    isLoading: isUploadingPost,
    data,
  } = useMutation({
    mutationFn: addCarPostApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-car-posts"] });
    },
  });

  return { addCarPost, isUploadingPost, data };
}
