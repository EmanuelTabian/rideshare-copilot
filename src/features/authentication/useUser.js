import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/rideauthApi";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });

  console.log(user);

  return { isLoading, user };
}
