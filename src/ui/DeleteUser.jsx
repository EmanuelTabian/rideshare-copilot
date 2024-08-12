import { useUserDelete } from "../features/authentication/useUserDelete";
import Button from "./Button";

function DeleteUser() {
  const { deleteUser, isLoading } = useUserDelete();
  function handleDeletion() {
    deleteUser();
  }

  return (
    <>
      <h1>Account Deletion</h1>
      <Button onClick={handleDeletion}>Delete account</Button>
    </>
  );
}

export default DeleteUser;
