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
import { useEffect, useState } from "react";
import CarPostsLayout from "../features/carposts/CarPostsLayout";
import { carPostsSorter } from "../utils/helpers";

const StyledCars = styled.div``;

const H2 = styled.h2``;

function Cars() {
  const { isLoading, carPosts, error } = useGetAllCarPosts();
  const [searchParams, setSearchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  if (carPosts.error)
    return (
      <>
        <Message>{carPosts.error}</Message>
        <div>
          <Button
            onClick={() => {
              searchParams.set("page", 1);
              setSearchParams(searchParams);
            }}
          >
            {" "}
            Back to page 1?
          </Button>
        </div>
      </>
    );
  const { data, count, pagination } = carPosts;
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
