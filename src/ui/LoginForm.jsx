import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useSignin } from "../features/authentication/useSignin";
import Button from "./Button";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  fieldset {
    border: none;
    width: 100%;
    max-width: 400px;
    padding: 0;
    margin: 0;
  }

  legend {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  div {
    margin-bottom: 1rem;
    width: 100%;
  }

  label {
    font-weight: bold;
  }

  input[type="email"],
  input[type="password"],
  input[type="text"],
  input[type="checkbox"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  input[type="checkbox"] {
    width: auto;
    margin-left: 0.5rem;
  }
  @media (min-width: 600px) {
    padding: 2rem;
    fieldset {
      max-width: 500px;
    }

    legend {
      font-size: 2rem;
    }

    input[type="email"],
    input[type="password"],
    input[type="text"] {
      font-size: 1.25rem;
    }
  }
`;

const testUsername = "abc@example.com";
const testPassword = "123RideshareCopilot!@#";
const testUsername2 = "a@example.com";
const testPassword2 = "123Rideshare!@#";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { signin, isLoading } = useSignin();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  console.log(showPassword);

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Welcome Back!</legend>
        <p>We're glad to see you again.</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            defaultValue={testUsername}
            {...register("email", { required: "This field is required" })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            defaultValue={testPassword}
            {...register("password", { required: "This field is required" })}
          />
        </div>
        <div>
          <label htmlFor="checkbox">Show password</label>
          <input
            type="checkbox"
            onClick={() => setShowPassword((password) => !password)}
          />
        </div>
        <div>
          <Button>Sign in</Button>
        </div>
      </fieldset>
    </Form>
  );
}

export default LoginForm;
