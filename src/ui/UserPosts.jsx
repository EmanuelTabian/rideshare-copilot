import styled from "styled-components";
import CarCard from "./CarCard";
import { cars } from "../data/cars-data";

const CarList = styled.ul``;

function UserPosts() {
  return (
    <CarList>
      {cars.map((car) => (
        <CarCard key={car.id} carDetails={car} />
      ))}
    </CarList>
  );
}

export default UserPosts;
