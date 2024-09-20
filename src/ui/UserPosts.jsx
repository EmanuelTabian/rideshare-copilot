import styled from "styled-components";
import CarCard from "./CarCard";
import { cars } from "../data/cars-data";
import { NavLink, useSearchParams } from "react-router-dom";
import Message from "./Message";
import CarPostTableOperations from "../features/carposts/CarPostTableOperations";
import { carPostsSorter } from "../utils/helpers";
import Pagination from "./Pagination";

const CarList = styled.ul``;

function UserPosts({ carPosts, count, pagination }) {
  console.log(carPosts);

  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const sortedCars = carPostsSorter(carPosts, sortBy);
  console.log(sortedCars);

  return (
    <>
      <NavLink to="/cars">Back to all posts</NavLink>
      <CarPostTableOperations />
      {sortedCars.length ? (
        <CarList>
          {sortedCars.map((carPost) => (
            <CarCard key={carPost.id} carDetails={carPost} />
          ))}
        </CarList>
      ) : (
        <div>
          <Message>Sorry, you have no car posts!</Message>
        </div>
      )}
      <Pagination count={count} pagination={pagination} />
    </>
  );
}

export default UserPosts;
