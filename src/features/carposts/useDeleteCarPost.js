import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCarPost as deleteCarPostApi } from "../../services/ridepostsApi";

export function useDeleteCarPost() {
  const queryClient = useQueryClient();
  const { mutate: deleteCarPost, isLoading: isDeletingCarPost } = useMutation({
    mutationFn: deleteCarPostApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
      queryClient.refetchQueries({ queryKey: ["car-posts"] });
      queryClient.removeQueries({ queryKey: ["car-posts", file_key] });
    },
  });

  return { deleteCarPost, isDeletingCarPost };
}
