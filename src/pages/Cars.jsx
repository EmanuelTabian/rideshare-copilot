import styled from "styled-components";
import { NavLink, useSearchParams } from "react-router-dom";

import CarCard from "../ui/CarCard";
import Button from "../ui/Button";
import CarPostForm from "../features/carposts/CarPostForm";
import Message from "../ui/Message";
import PostCar from "../features/carposts/PostCar";
import { useGetAllCarPosts } from "../features/carposts/useGetAllCarPosts";
import Spinner from "../ui/Spinner";
import CarPostTableOperations from "../features/carposts/CarPostTableOperations";
import Pagination from "../ui/Pagination";
import { useEffect } from "react";
import CarPostsLayout from "../features/carposts/CarPostsLayout";

const StyledCars = styled.div``;

const H2 = styled.h2``;

function Cars() {
  const { isLoading, carPosts, error } = useGetAllCarPosts();
  const [searchParams, setSearchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  const { data, count, pagination } = carPosts;
  // Get sortBy params and account for a name-asc default value
  // const sortBy = searchParams.get("sortBy") || "car_name-asc";
  // // Split param components and destructure it into sort criteria and direction
  // const [fieldName, direction] = sortBy.split("-");
  // // Set up a modifier that will serve for sorting calculation depending on direction
  // const modifier = direction === "asc" ? "1" : "-1";
  // // Ascending/Descending sorting algorithm accounts for a separate scenario, so when the field is a string we use local compare to perform an alphabetical order
  // const sortedCarPosts = carPosts.data.sort((a, b) =>
  //   typeof a[fieldName] === "string"
  //     ? a[fieldName].localeCompare(b[fieldName]) * modifier
  //     : (a[fieldName] - b[fieldName]) * modifier
  // );

  return (
    <>
      <StyledCars>
        <PostCar />
        <NavLink to="/cars/myposts">My posts</NavLink>
        <H2>Browse car posts</H2>
        <CarPostsLayout carPosts={data} count={count} pagination={pagination} />
      </StyledCars>
    </>
  );
}

export default Cars;
