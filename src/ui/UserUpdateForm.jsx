import { useForm } from "react-hook-form";
import Button from "./Button";
import { useUserUpdate } from "../features/authentication/useUserUpdate";
import styled from "styled-components";

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

  &:hover {
    background-color: var(--color-brand-600);
    color: white;
  }
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;

function UserUpdateForm() {
  const { userUpdate, isLoading } = useUserUpdate();

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
        onSettled: () => reset(),
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
          <input type="password" {...register("password")} />
        </div>
        <StyledButton>Save</StyledButton>
      </fieldset>
    </Form>
  );
}

export default UserUpdateForm;
