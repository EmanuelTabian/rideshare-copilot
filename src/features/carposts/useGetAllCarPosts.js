import { useQuery } from "@tanstack/react-query";
import { getCarPosts } from "../../services/ridepostsApi";

export function useGetAllCarPosts() {
  const { isLoading, data: carPosts } = useQuery({
    queryKey: ["car-posts"],
    queryFn: () => getCarPosts(),
  });

  return { isLoading, carPosts };
}
