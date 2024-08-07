import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userUpdate as userUpdateApi } from "../../services/rideauthApi";

export function useUserUpdate() {
  const queryClient = useQueryClient();
  const { mutation: userUpdate, isLoading } = useMutation({
    mutationFn: userUpdateApi(),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return { userUpdate, isLoading };
}
