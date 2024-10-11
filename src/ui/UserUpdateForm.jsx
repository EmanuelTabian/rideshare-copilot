import { useForm } from "react-hook-form";
import Button from "./Button";
import { useUserUpdate } from "../features/authentication/useUserUpdate";
import styled from "styled-components";
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const Form = styled.form`
  fieldset {
    border: none;
    width: 100%;
    max-width: 500px;
    padding: 8px;

    margin: 8px;

    & div {
      display: grid;
      grid-template-columns: 5rem 12rem;
      margin: 8px;
      gap: 8px;
    }

    & div > input {
      border: none;
      border-radius: 8px;
      background-color: var(--color-brand-700);
      color: white;
    }
  }

  legend {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const StyledUl = styled.ul`
  color: red;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledButton = styled.button`
  background-color: white;
  margin: 8px;
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: 0 10px 10px 10px;
  font-size: 0.75rem;
  font-weight: 900;
  cursor: pointer;

  display: inline;
  transition: background-color 0.3s;
  &:disabled:hover {
    background-color: var(--color-grey-300);
    color: black;
    cursor: not-allowed;
  }
  &:hover {
    background-color: var(--color-brand-600);
    color: white;
  }
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;

function UserUpdateForm() {
  const [updateErrors, setUpdateErrors] = useState([]);
  const [password, setPassword] = useState("");

  const { userUpdate, status } = useUserUpdate();

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
        onSuccess: () => reset(),
        onError: (error) => {
          setUpdateErrors([...error?.message?.split(",")]);
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Update profile info</legend>
        <div>
          <label htmlFor="name">Username: </label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            {...register("password")}
            onChange={(e) => {
              setPassword(e.target.value);
              if (!e.target.value) {
                setPassword("");
              }
            }}
          />
        </div>
        <StyledUl>
          {updateErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </StyledUl>
        <StyledButton disabled={status === "pending"}>Save</StyledButton>
      </fieldset>
    </Form>
  );
}

export default UserUpdateForm;
