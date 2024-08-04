import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useSignin } from "../features/authentication/useSignin";
import Button from "./Button";

function LoginForm() {
  const { signin, isLoading } = useSignin();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ email, password }) {
    if (!email || !password) return;
    signin(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Enter your email and password</legend>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email", { required: "This field is required" })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password", { required: "This field is required" })}
          />
        </div>
        <label htmlFor="checkbox">Show password</label>
        <input type="checkbox" />
        <div>
          <Button>Sign in</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default LoginForm;
