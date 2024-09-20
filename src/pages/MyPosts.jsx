import PostCar from "../features/carposts/PostCar";
import { useGetUserCarPosts } from "../features/carposts/useGetUserCarPosts";
import Message from "../ui/Message";
import Spinner from "../ui/Spinner";
import UserPosts from "../ui/UserPosts";

function MyPosts() {
  const { isLoading, userCarPosts } = useGetUserCarPosts();

  if (isLoading) return <Spinner />;
  const { data, count, pagination } = userCarPosts;
  return (
    <>
      <h1>My posts</h1>
      <PostCar />
      <UserPosts carPosts={data} count={count} pagination={pagination} />
    </>
  );
}

export default MyPosts;
