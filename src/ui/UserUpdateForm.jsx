import { useForm } from "react-hook-form";
import Button from "./Button";
import { useUserUpdate } from "../features/authentication/useUserUpdate";

function UserUpdateForm() {
  const { userUpdate, isLoading } = useUserUpdate;

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit({ username, password }) {
    if (!username && !password) return;
    userUpdate(
      { username, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Update profile info</legend>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" {...register("username")} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" {...register("password")} />
        </div>
        <Button>Save</Button>
      </fieldset>
    </form>
  );
}

export default UserUpdateForm;
