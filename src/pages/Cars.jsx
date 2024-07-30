import styled from "styled-components";

import { cars } from "../data/cars-data";
import CarCard from "../ui/CarCard";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

const StyledCars = styled.div``;

const H2 = styled.h2``;

const CarList = styled.ul``;

function Cars() {
  return (
    <>
      <StyledCars>
        <H2>Browse car posts</H2>
        <CarList>
          {cars.map((car) => (
            <CarCard key={car.id} carDetails={car} />
          ))}
        </CarList>
      </StyledCars>
      <NavLink to="/cars/myposts">My posts</NavLink>
      <Button> Add new post</Button>
    </>
  );
}

export default Cars;
