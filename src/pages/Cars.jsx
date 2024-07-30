import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { cars } from "../data/cars-data";
import CarCard from "../ui/CarCard";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Message from "../ui/Message";

const StyledCars = styled.div``;

const H2 = styled.h2``;

const CarList = styled.ul``;

function Cars() {
  return (
    <>
      <StyledCars>
        <H2>Browse car posts</H2>
        {/* Conditionally rendered when the posts array of objects is empty */}
        {/* <Message>No posts yet</Message> */}
        <CarList>
          {cars.map((car) => (
            <CarCard key={car.id} carDetails={car} />
          ))}
        </CarList>
      </StyledCars>
      <NavLink to="/cars/myposts">My posts</NavLink>
      <Button> Add new post</Button>
      <Form />
    </>
  );
}

export default Cars;
