import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useSignup } from "../features/authentication/useSignup";
import styled from "styled-components";
import { useState } from "react";

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
    max-width: 500px;
    padding: 0;
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

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
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

const StyledUl = styled.ul`
  color: red;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

function Signup() {
  const [signupErrors, setSignupErrors] = useState([]);
  const { signup, isLoading } = useSignup();

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit({ name, email, password }) {
    signup(
      { name, email, password },
      {
        onSuccess: () => navigate("/login"),
        onError: (error) => {
          setSignupErrors([...error?.message?.split(",")]);
        },
      }
    );
  }

  console.log(signupErrors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>New to Rideshare Copilot?</legend>
        <p>
          Sign up to track your earnings, explore car rental posts and more.
        </p>
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

        <StyledUl>
          {signupErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </StyledUl>

        <div>
          <Button>Create Account</Button>
        </div>
      </fieldset>
    </Form>
  );
}

export default Signup;
