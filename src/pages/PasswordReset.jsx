import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Message from "../ui/Message";

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
      {/* React query will detect when mutation is loading, on form submit, based on that we will render the below listed message */}
      {/* <Message>
        You will receive a password reset email soon. Follow the link in the
        email to reset your password.
      </Message> */}
    </>
  );
}

export default PasswordReset;
