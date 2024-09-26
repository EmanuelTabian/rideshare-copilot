import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCarPost as deleteCarPostApi } from "../../services/ridepostsApi";

export function useDeleteCarPost() {
  const queryClient = useQueryClient();
  const { mutate: deleteCarPost, isLoading: isDeletingCarPost } = useMutation({
    mutationFn: (id) => deleteCarPostApi(id),
    onSuccess: (data, id) => {
      queryClient.removeQueries({ queryKey: ["imageUrl", id] });
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-car-posts"] });
    },
  });

  return { deleteCarPost, isDeletingCarPost };
}
