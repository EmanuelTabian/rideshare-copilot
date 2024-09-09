import { useQuery } from "@tanstack/react-query";
import { getCarPosts } from "../../services/ridepostsApi";
import { useSearchParams } from "react-router-dom";

export function useGetAllCarPosts() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? "1" : searchParams.get("page");
  const {
    isLoading,
    data: carPosts,
  } = useQuery({
    queryKey: ["car-posts", page],
    queryFn: () => getCarPosts(page),
  });

  return { isLoading, carPosts };
}
