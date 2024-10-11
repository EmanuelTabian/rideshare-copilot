import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCarPost as updateCarPostApi } from "../../services/ridepostsApi";
import toast from "react-hot-toast";

export function useUpdateCarPost() {
  const queryClient = useQueryClient();
  const { mutate: updateCarPost, status: isUpdatingCarPost } = useMutation({
    mutationFn: (formData) => updateCarPostApi(formData),
    onSuccess: (data, formData) => {
      queryClient.invalidateQueries({ queryKey: ["imageUrl", formData.id] });
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
      queryClient.invalidateQueries({ queryKey: ["car-post"] });
      queryClient.invalidateQueries({ queryKey: ["user-car-posts"] });
      toast.success("Post updated successfully!");
    },
  });

  return { updateCarPost, isUpdatingCarPost };
}
