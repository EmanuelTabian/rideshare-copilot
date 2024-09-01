import styled from "styled-components";
import CarCard from "./CarCard";
import { cars } from "../data/cars-data";
import { NavLink } from "react-router-dom";

const CarList = styled.ul``;

function UserPosts({ carPosts }) {
  return (
    <>
      <NavLink to="/cars">Back to all posts</NavLink>
      <CarList>
        {carPosts.map((carPost) => (
          <CarCard key={carPost.id} carDetails={carPost} />
        ))}
      </CarList>
    </>
  );
}

export default UserPosts;
