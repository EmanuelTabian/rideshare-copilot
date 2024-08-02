import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/rideauthApi";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
  });

  return { signup, isLoading };
}
