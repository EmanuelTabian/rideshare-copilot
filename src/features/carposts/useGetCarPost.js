import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCarPost } from "../../services/ridepostsApi";

export function useGetCarPost() {
  const { carId } = useParams();
  // Future update: remove queries on ther car post id selection
  const { isLoading, data: carPost } = useQuery({
    queryKey: ["car-post", carId],
    queryFn: () => getCarPost(carId),
  });

  return { isLoading, carPost };
}
