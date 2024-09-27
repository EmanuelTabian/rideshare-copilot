import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin as signinApi } from "../../services/rideauthApi";
import { useNavigate } from "react-router-dom";

export function useSignin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signin, isLoading } = useMutation({
    mutationFn: signinApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("💥 ", err);
    },
  });

  return { signin, isLoading };
}
