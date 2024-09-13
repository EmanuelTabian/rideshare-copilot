import { useSearchParams } from "react-router-dom";
import CarCard from "../../ui/CarCard";
import Message from "../../ui/Message";
import Pagination from "../../ui/Pagination";
import CarPostTableOperations from "./CarPostTableOperations";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";

function CarPostsLayout({ carPosts, count, pagination }) {
  return (
    <>
      <CarPostTableOperations />
      {/* Conditionally rendered when the posts array of objects is empty */}
      {!carPosts ? (
        <Message>No posts yet! You can add one!</Message>
      ) : (
        <ul>
          {carPosts.map((carPost) => (
            <CarCard key={carPost.id} carDetails={carPost} />
          ))}
        </ul>
      )}
      <Pagination count={count} pagination={pagination} />
    </>
  );
}

export default CarPostsLayout;
