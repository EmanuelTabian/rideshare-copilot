import styled from "styled-components";
import CarCard from "./CarCard";
import { cars } from "../data/cars-data";
import { NavLink } from "react-router-dom";
import Message from "./Message";

const CarList = styled.ul``;

function UserPosts({ carPosts }) {
  return (
    <>
      <NavLink to="/cars">Back to all posts</NavLink>

      {carPosts.length ? (
        <CarList>
          {carPosts.map((carPost) => (
            <CarCard key={carPost.id} carDetails={carPost} />
          ))}
        </CarList>
      ) : (
        <div>
          <Message>Sorry, you have no car posts!</Message>
        </div>
      )}
    </>
  );
}

export default UserPosts;
