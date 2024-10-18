import styled from "styled-components";
import { NavLink, useSearchParams } from "react-router-dom";

import Button from "../ui/Button";
import Message from "../ui/Message";
import PostCar from "../features/carposts/PostCar";
import { useGetAllCarPosts } from "../features/carposts/useGetAllCarPosts";
import CarPostTableOperations from "../features/carposts/CarPostTableOperations";
import CarPostsLayout from "../features/carposts/CarPostsLayout";

const H2 = styled.h2`
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

function Cars() {
  const { isLoading, carPosts } = useGetAllCarPosts();
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
