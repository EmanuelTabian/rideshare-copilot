import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/rideauthApi";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, status } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
  });

  return { signup, status };
}
