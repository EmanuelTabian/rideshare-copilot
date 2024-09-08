import styled from "styled-components";
import { NavLink } from "react-router-dom";

import CarCard from "../ui/CarCard";
import Button from "../ui/Button";
import CarPostForm from "../features/carposts/CarPostForm";
import Message from "../ui/Message";
import PostCar from "../features/carposts/PostCar";
import { useGetAllCarPosts } from "../features/carposts/useGetAllCarPosts";
import Spinner from "../ui/Spinner";
import CarPostTableOperations from "../features/carposts/CarPostTableOperations";

const StyledCars = styled.div``;

const H2 = styled.h2``;

const CarList = styled.ul`
  list-style: none;
`;

function Cars() {
  const { isLoading, carPosts } = useGetAllCarPosts();

  if (isLoading) return <Spinner />;

  return (
    <>
      <StyledCars>
        <PostCar />
        <NavLink to="/cars/myposts">My posts</NavLink>
        <H2>Browse car posts</H2>
        <CarPostTableOperations />
        {/* Conditionally rendered when the posts array of objects is empty */}
        {!carPosts ? (
          <Message>No posts yet</Message>
        ) : (
          <CarList>
            {carPosts.map((carPost) => (
              <CarCard key={carPost.id} carDetails={carPost} />
            ))}
          </CarList>
        )}
      </StyledCars>
    </>
  );
}

export default Cars;
