import { useGetCarPost } from "../features/carposts/useGetCarPost";
import CarPost from "../ui/CarPost";
import Spinner from "../ui/Spinner";

function CarDetails() {
  const { carPost, isLoading } = useGetCarPost();
  console.log(carPost);
  if (isLoading) return <Spinner />;
  return <CarPost carPost={carPost} />;
}

export default CarDetails;
