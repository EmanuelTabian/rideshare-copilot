import { useQuery } from "@tanstack/react-query";
import { getImageUrl } from "../../services/ridepostsApi";

export function useGetImageUrl() {
  const { isLoading, data: imageUrl } = useQuery({
    queryFn: getImageUrl,
  });

  return imageUrl;
}
