import { useQuery } from "@tanstack/react-query";
import { getUserCarPosts } from "../../services/ridepostsApi";
import { useSearchParams } from "react-router-dom";

export function useGetUserCarPosts() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? "1" : searchParams.get("page");
  const { isLoading, data: userCarPosts } = useQuery({
    queryKey: ["user-car-posts", page],
    queryFn: getUserCarPosts(page),
  });

  return { isLoading, userCarPosts };
}
