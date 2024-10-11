import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCarPost as deleteCarPostApi } from "../../services/ridepostsApi";
import toast from "react-hot-toast";

export function useDeleteCarPost() {
  const queryClient = useQueryClient();
  const { mutate: deleteCarPost, isLoading: isDeletingCarPost } = useMutation({
    mutationFn: (id) => deleteCarPostApi(id),
    onSuccess: (data, id) => {
      queryClient.removeQueries({ queryKey: ["imageUrl", id] });
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-car-posts"] });
      toast.success("Post deleted successfully!");
    },
  });

  return { deleteCarPost, isDeletingCarPost };
}
