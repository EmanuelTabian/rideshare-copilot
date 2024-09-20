import { useQuery } from "@tanstack/react-query";
import { getImageUrl } from "../../services/ridepostsApi";

export function useGetImageUrl(carPostId) {
  const {
    isLoading,
    data: imageUrl,
    error,
  } = useQuery({
    queryKey: ["imageUrl", carPostId],
    queryFn: () => getImageUrl(carPostId),
  });

  return { isLoading, imageUrl, error };
}
