import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { cars } from "../data/cars-data";
import CarCard from "../ui/CarCard";

const StyledCars = styled.div``;

const H2 = styled.h2``;

const CarList = styled.ul``;

function Cars() {
  return (
    <StyledCars>
      <H2>Browse car posts</H2>
      <CarList>
        {cars.map((car) => (
          <NavLink to="/cars/23">
            <CarCard key={car.id} carDetails={car} />
          </NavLink>
        ))}
      </CarList>
    </StyledCars>
  );
}

export default Cars;
