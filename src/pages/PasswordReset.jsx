import { useForm } from "react-hook-form";
import Button from "../ui/Button";

function PasswordReset() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  return (
    <>
      <h1>Reset Your Password</h1>
      <form>
        <fieldset>
          <legend>
            Enter your email address and we'll ed you a password reset link.
          </legend>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              {...register("email", { required: "This field is required" })}
            />
          </div>
          <Button>Reset password </Button>
        </fieldset>
      </form>
    </>
  );
}

export default PasswordReset;
