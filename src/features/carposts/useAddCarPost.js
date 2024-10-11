import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCarPost as addCarPostApi } from "../../services/ridepostsApi";
import toast from "react-hot-toast";

export function useAddCarPost() {
  const queryClient = useQueryClient();
  const {
    mutate: addCarPost,
    status: isAddingCarPost,
    data,
  } = useMutation({
    mutationFn: addCarPostApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-car-posts"] });
      toast.success("Post added successfully!");
    },
  });

  return { addCarPost, isAddingCarPost, data };
}
