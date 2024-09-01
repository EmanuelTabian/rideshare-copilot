import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCarPost } from "../../services/ridepostsApi";

export function useGetCarPost() {
  const { carId } = useParams();

  const { isLoading, data: carData } = useQuery({
    queryKey: ["car-post", carId],
    queryFn: () => getCarPost(carId),
  });

  return { isLoading, carData };
}
