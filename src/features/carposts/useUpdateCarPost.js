import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCarPost as updateCarPostApi } from "../../services/ridepostsApi";

export function useUpdateCarPost() {
  const queryClient = useQueryClient();
  const { mutate: updateCarPost, isLoading: isUpdatingCarPost } = useMutation({
    mutationFn: updateCarPostApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
      // Temporary fix: we refetch all the car posts for image update as invalidation wont work as long as the image key is the same
      queryClient.resetQueries({ queryKey: ["car-posts"] });
    },
  });

  return { updateCarPost, isUpdatingCarPost };
}
