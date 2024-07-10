import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { cars } from "../data/cars-data";

const StyledCars = styled.div``;

const H2 = styled.h2``;

const CarList = styled.ul``;

function Cars() {
  return (
    <StyledCars>
      <H2>Browse car posts</H2>
      <CarList>
        {cars.map((car) => (
          <CarCard carDetails={car} />
        ))}
      </CarList>
    </StyledCars>
  );
}

export default Cars;
