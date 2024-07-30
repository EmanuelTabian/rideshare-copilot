import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Signup() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit() {
    navigate("/dashboard");
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
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register("username", { required: "This field is required" })}
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
