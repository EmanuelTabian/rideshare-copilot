import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { cars } from "../data/cars-data";
import CarCard from "../ui/CarCard";
import Button from "../ui/Button";
import CarPostForm from "../features/carposts/CarPostForm";
import Message from "../ui/Message";
import PostCar from "../features/carposts/PostCar";

const StyledCars = styled.div``;

const H2 = styled.h2``;

const CarList = styled.ul``;

function Cars() {
  return (
    <>
      <StyledCars>
        <PostCar />
        <NavLink to="/cars/myposts">My posts</NavLink>
        <H2>Browse car posts</H2>
        {/* Conditionally rendered when the posts array of objects is empty */}
        {/* <Message>No posts yet</Message> */}
        <CarList>
          {cars.map((car) => (
            <CarCard key={car.id} carDetails={car} />
          ))}
        </CarList>
      </StyledCars>
    </>
  );
}

export default Cars;
