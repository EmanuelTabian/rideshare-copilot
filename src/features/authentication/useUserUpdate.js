import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userUpdate as userUpdateApi } from "../../services/rideauthApi";
import { toast } from "react-hot-toast";

export function useUserUpdate() {
  const queryClient = useQueryClient();
  const { mutate: userUpdate, status } = useMutation({
    mutationFn: userUpdateApi,
    onSuccess: () => {
      // You may set this up to invalidate only the user query key
      queryClient.invalidateQueries();
      toast.success("Profile updated successfully!");
    },
  });

  return { userUpdate, status };
}
