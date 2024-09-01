import { useGetUserCarPosts } from "../features/carposts/useGetUserCarPosts";
import Spinner from "../ui/Spinner";
import UserPosts from "../ui/UserPosts";

function MyPosts() {
  const { isLoading, userCarPosts } = useGetUserCarPosts();
  console.log(userCarPosts);

  // if (isLoading) return <Spinner />;

  // return (
  //   <>
  //     <h1>My posts</h1>
  //     <UserPosts carPosts={userCarPosts} />
  //   </>
  // );
}

export default MyPosts;
