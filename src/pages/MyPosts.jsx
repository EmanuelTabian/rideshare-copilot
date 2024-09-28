import { NavLink } from "react-router-dom";
import PostCar from "../features/carposts/PostCar";
import { useGetUserCarPosts } from "../features/carposts/useGetUserCarPosts";
import Spinner from "../ui/Spinner";

import CarPostsLayout from "../features/carposts/CarPostsLayout";
import styled from "styled-components";

const H1 = styled.h1`
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

  if (isLoading) return <Spinner />;
  const { data, count, pagination } = userCarPosts;
  return (
    <>
      <H1>My posts</H1>
      <FlexContainer>
        <PostCar />
        <StyledNavLink to="/cars">Back to all posts</StyledNavLink>
      </FlexContainer>
      <CarPostsLayout carPosts={data} count={count} pagination={pagination} />
    </>
  );
}

export default MyPosts;
