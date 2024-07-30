import { useForm } from "react-hook-form";
import Button from "./Button";

function UserUpdateForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  return (
    <form>
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
