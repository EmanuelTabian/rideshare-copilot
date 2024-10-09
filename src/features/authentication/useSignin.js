import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin as signinApi } from "../../services/rideauthApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useSignin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: signin,
    isLoading,
    isError,
    isSuccess,
    status,
  } = useMutation({
    mutationFn: signinApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      navigate("/dashboard", { replace: true });
    },
  });

  return { signin, isLoading, isError, isSuccess, status };
}
