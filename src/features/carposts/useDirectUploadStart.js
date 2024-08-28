import { useMutation } from "@tanstack/react-query";
import { directUploadStart as directUploadStartApi } from "../../services/ridepostsApi";

export function useDirectUploadStart() {
  const { mutate: directUploadStart, isLoading } = useMutation({
    mutationFn: directUploadStartApi,
  });

  return { directUploadStart, isLoading };
}
