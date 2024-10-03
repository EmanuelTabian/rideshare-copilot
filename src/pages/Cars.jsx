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

const FlexContainer = styled.div`
  font-size: 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-start;
  align-items: center;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: color 0.2s;
  font-weight: bold;
  &.active {
    color: var(--color-brand-600);
  }

  &:hover {
    color: var(--color-brand-600);
  }
`;

const StyledCars = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2``;

function Cars() {
  const { isLoading, carPosts, error } = useGetAllCarPosts();
  const [searchParams, setSearchParams] = useSearchParams();
  if (carPosts?.error)
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
  // const { data, count, pagination } = carPosts;

  return (
    <>
      <StyledCars>
        <H2>Browse car posts</H2>
        <FlexContainer>
          <StyledNavLink to="/cars/myposts">My posts</StyledNavLink>
          <PostCar />
          <CarPostTableOperations />
        </FlexContainer>

        {isLoading ? (
          ""
        ) : (
          <CarPostsLayout
            carPosts={carPosts.data}
            count={carPosts.count}
            pagination={carPosts.pagination}
          />
        )}
      </StyledCars>
    </>
  );
}

export default Cars;
