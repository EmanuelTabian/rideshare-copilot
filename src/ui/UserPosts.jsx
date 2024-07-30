import styled from "styled-components";
import CarCard from "./CarCard";
import { cars } from "../data/cars-data";
import { NavLink } from "react-router-dom";

const CarList = styled.ul``;

function UserPosts() {
  return (
    <>
      <NavLink to="/cars">Back to all posts</NavLink>
      <CarList>
        {cars.map((car) => (
          <CarCard key={car.id} carDetails={car} />
        ))}
      </CarList>
    </>
  );
}

export default UserPosts;
