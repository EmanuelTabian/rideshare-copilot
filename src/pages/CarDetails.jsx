import { useGetCarPost } from "../features/carposts/useGetCarPost";
import CarPost from "../ui/CarPost";
import Spinner from "../ui/Spinner";

function CarDetails() {
  const { carPost, isLoading } = useGetCarPost();
  if (isLoading) return;
  return <CarPost carPost={carPost} />;
}

export default CarDetails;
