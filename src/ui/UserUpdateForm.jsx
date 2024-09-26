import { useForm } from "react-hook-form";
import Button from "./Button";
import { useUserUpdate } from "../features/authentication/useUserUpdate";

function UserUpdateForm() {
  const { userUpdate, isLoading } = useUserUpdate();

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit({ name, password }) {
    if (!name && !password) return;
    let userdata = { name, password };
    if (!password) userdata = { name };
    if (!name) userdata = { password };

    userUpdate(
      { userdata },
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
          <label htmlFor="name">Username: </label>
          <input type="text" {...register("name")} />
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
