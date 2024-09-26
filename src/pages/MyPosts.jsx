import { NavLink } from "react-router-dom";
import PostCar from "../features/carposts/PostCar";
import { useGetUserCarPosts } from "../features/carposts/useGetUserCarPosts";
import Spinner from "../ui/Spinner";

import CarPostsLayout from "../features/carposts/CarPostsLayout";

function MyPosts() {
  const { isLoading, userCarPosts } = useGetUserCarPosts();

  if (isLoading) return <Spinner />;
  const { data, count, pagination } = userCarPosts;
  return (
    <>
      <h1>My posts</h1>

      <PostCar />
      <NavLink to="/cars">Back to all posts</NavLink>
      <CarPostsLayout carPosts={data} count={count} pagination={pagination} />
    </>
  );
}

export default MyPosts;
