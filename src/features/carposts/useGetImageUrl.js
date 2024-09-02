import { useQuery } from "@tanstack/react-query";
import { getImageUrl } from "../../services/ridepostsApi";

export function useGetImageUrl(fileKey) {
  const {
    isLoading,
    data: imageUrl,
    error,
  } = useQuery({
    queryKey: ["image-url", fileKey],
    queryFn: () => getImageUrl(fileKey),
    enabled: !!fileKey,
    refetchInterval: 3600 * 1000,
  });

  return { isLoading, imageUrl, error };
}
