import { useForm } from "react-hook-form";
import styled from "styled-components";

import { useSignin } from "../features/authentication/useSignin";
import Button from "./Button";
import { useState } from "react";
import SpinnerMini from "./SpinnerMini";
import ErrorMessage from "./ErrorMessage";

const LogoContainer = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    top: 16px;
    position: absolute;
    width: 100px;
    height: auto;
  }

  h1 {
    z-index: 100;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    /* text-transform: uppercase; */
    letter-spacing: 4px;
  }
  @media (min-width: 600px) {
    margin-top: 8.5rem;
    img {
      width: 150px;
    }

    h1 {
      font-size: 3rem;
    }
  }
`;

const ErrorContainer = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: white;
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
    font-size: 1.3rem;
    font-weight: 700;
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
    box-sizing: border-box;
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

function LoginForm() {
  const [authError, setAuthError] = useState(null);
  const { signin, status } = useSignin();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(formData) {
    if (!formData.email || !formData.password) return;

    signin(formData, {
      onSettled: () => {
        reset();
      },
      onError: (error) => {
        setAuthError(error.message);
        reset();
      },
    });
  }

  return (
    <>
      <LogoContainer>
        <img src="RC-logo.svg" alt="Rideshare logo" />
        <h1>RideshareCopilot</h1>
      </LogoContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Welcome back!</legend>
          <p>We're glad to see you again.</p>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              // defaultValue={username}
              type="email"
              {...register("email", { required: "This field is required" })}
            />
            <ErrorContainer>
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            </ErrorContainer>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              // defaultValue={password}
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "This field is required" })}
            />
            <ErrorContainer>
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            </ErrorContainer>
            <ErrorContainer>
              <ErrorMessage>{authError}</ErrorMessage>
            </ErrorContainer>
          </div>
          <div>
            <label htmlFor="checkbox">Show password</label>
            <input
              type="checkbox"
              onClick={() => setShowPassword((password) => !password)}
            />
          </div>
          <div>
            <Button>{status === "pending" ? <SpinnerMini /> : "Login"}</Button>
          </div>
        </fieldset>
      </Form>
    </>
  );
}

export default LoginForm;
