import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCarPost as updateCarPostApi } from "../../services/ridepostsApi";

export function useUpdateCarPost() {
  const queryClient = useQueryClient();
  const { mutate: updateCarPost, isLoading: isUpdatingCarPost } = useMutation({
    mutationFn: (formData) => updateCarPostApi(formData),
    onSuccess: (data, formData) => {
      queryClient.invalidateQueries({ queryKey: ["imageUrl", formData.id] });
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
    },
  });

  return { updateCarPost, isUpdatingCarPost };
}
