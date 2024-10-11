import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteUser as deleteUserApi } from "../../services/rideauthApi";
import toast from "react-hot-toast";

export function useUserDelete() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteUser, isLoading } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
      toast.success("Account deleted successfully!");
    },
  });

  return { deleteUser, isLoading };
}
