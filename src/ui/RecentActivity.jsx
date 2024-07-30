import styled from "styled-components";
import CarCard from "./CarCard";
import { cars } from "../data/cars-data";

const CarList = styled.ul``;

function RecentActivity() {
  return (
    <>
      <h1>Recent car posts</h1>
      <div>
        {/* Conditionally rendered when the posts array of objects is empty */}
        {/* <Message>No recent car posts</Message> */}
        <CarList>
          {cars.map((car) => (
            <CarCard key={car.id} carDetails={car} />
          ))}
        </CarList>
      </div>
    </>
  );
}

export default RecentActivity;
