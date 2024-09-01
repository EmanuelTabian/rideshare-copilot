import { useQuery } from "@tanstack/react-query";
import { getUserCarPosts } from "../../services/ridepostsApi";

export function useGetUserCarPosts() {
  const { isLoading, data: userCarPosts } = useQuery({
    queryKey: ["user-car-posts"],
    queryFn: getUserCarPosts(),
  });

  return { isLoading, userCarPosts };
}
