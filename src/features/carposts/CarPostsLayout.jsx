import { useSearchParams } from "react-router-dom";
import CarCard from "../../ui/CarCard";
import Message from "../../ui/Message";
import Pagination from "../../ui/Pagination";
import CarPostTableOperations from "./CarPostTableOperations";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";
import { carPostsSorter } from "../../utils/helpers";

function CarPostsLayout({ carPosts, count, pagination, searchParams }) {
  const [sortedCarPosts, setSortedCarPosts] = useState([]);

  useEffect(() => {
    const sorted = carPostsSorter(carPosts, searchParams);
    setSortedCarPosts(sorted);
  }, [carPosts, searchParams.get("sortBy")]);

  return (
    <>
      <CarPostTableOperations />
      {/* Conditionally rendered when the posts array of objects is empty */}
      {!sortedCarPosts ? (
        <Message>No posts yet! You can add one!</Message>
      ) : (
        <ul>
          {sortedCarPosts.map((carPost) => (
            <CarCard key={carPost.id} carDetails={carPost} />
          ))}
        </ul>
      )}
      <Pagination count={count} pagination={pagination} />
    </>
  );
}

export default CarPostsLayout;
