import Button from "./Button";

function DeleteUser() {
  function handleDeletion() {}

  return (
    <>
      <h1>Account Deletion</h1>
      <Button onClick={handleDeletion}>Delete account</Button>
    </>
  );
}

export default DeleteUser;
