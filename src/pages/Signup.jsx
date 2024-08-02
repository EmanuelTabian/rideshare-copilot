import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useSignup } from "../features/authentication/useSignup";

function Signup() {
  const { signup, isLoading } = useSignup();

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ name, email, password }) {
    signup(
      { name, email, password },
      {
        onSettled: () => navigate("/login"),
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
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            {...register("name", { required: "This field is required" })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register("password", { required: "This field is required" })}
          />
        </div>
        <div>
          <Button>Create Account</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default Signup;
