import { useQueryClient } from "@tanstack/react-query";
import { signin as signinApi } from "../../services/rideauthApi";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signin, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signinApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("💥 ", err);
    },
  });

  return { signup, isLoading };
}
