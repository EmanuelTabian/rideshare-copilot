import { useMutation } from "@tanstack/react-query";
import { directUploadStart as directUploadStartApi } from "../../services/ridepostsApi";

export function useDirectUploadStart() {
  const {
    mutate: directUploadStart,
    isLoading,
    data,
  } = useMutation({
    mutationFn: directUploadStartApi,
  });

  return { directUploadStart, isLoading, data };
}
