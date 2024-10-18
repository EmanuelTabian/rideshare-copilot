import { NavLink } from "react-router-dom";
import styled from "styled-components";

import PostCar from "../features/carposts/PostCar";
import { useGetUserCarPosts } from "../features/carposts/useGetUserCarPosts";
import Spinner from "../ui/Spinner";
import CarPostsLayout from "../features/carposts/CarPostsLayout";
import CarPostTableOperations from "../features/carposts/CarPostTableOperations";

const H1 = styled.h1`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

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

  &:hover {
    color: var(--color-brand-600);
  }
`;

function MyPosts() {
  const { isLoading, userCarPosts } = useGetUserCarPosts();

  return (
    <>
      <H1>My posts</H1>
      <FlexContainer>
        <StyledNavLink to="/cars">Back to all posts</StyledNavLink>
        <PostCar />
        <CarPostTableOperations />
      </FlexContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <CarPostsLayout
          carPosts={userCarPosts.data}
          count={userCarPosts.count}
          pagination={userCarPosts.pagination}
        />
      )}
    </>
  );
}

export default MyPosts;
