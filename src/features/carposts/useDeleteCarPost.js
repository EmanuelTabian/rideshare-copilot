import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCarPost as deleteCarPostApi } from "../../services/ridepostsApi";

export function useDeleteCarPost() {
  const queryClient = useQueryClient();
  const { mutate: deleteCarPost, isLoading } = useMutation({
    mutationFn: ({ carpostId, file_key }) =>
      deleteCarPostApi(carpostId, file_key),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["car-posts"] });
      queryClient.removeQueries({ queryKey: ["car-posts", file_key] });
    },
  });

  return { deleteCarPost, isLoading };
}
