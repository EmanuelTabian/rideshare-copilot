import { useForm } from "react-hook-form";
import { useAddCarPost } from "./useAddCarPost";
import { useUpdateCarPost } from "./useUpdateCarPost";
import styled from "styled-components";
import { useState } from "react";

const StyledContainer = styled.div`
  height: 90vh;
  padding: 16px;
  border-radius: 16px;
  background-color: rgba(10, 146, 69, 0.8);
  color: white;
  font-size: 1.3rem;
`;

const InputContainer = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1rem;
`;

const StyledForm = styled.form`
  fieldset {
    border-radius: 10px;
    border: none;
    padding: 0;
    margin: 0;
  }
  legend {
    padding-bottom: 8px;
    text-align: center;
  }
  input,
  textarea {
    border: none;
    border-radius: 4px;
  }
  input[type="submit"] {
    padding: 4px 32px;
    border-radius: 32px;
    font-weight: 900;
    transition: background-color 0.3s;
  }
  input[type="submit"]:hover {
    background-color: var(--color-grey-400);
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 68px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    padding: 8px 32px;
    border: none;
    border-radius: 16px;
    font-weight: 900;

    transition: background-color 0.3s;
    &:disabled:hover {
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background-color: var(--color-grey-400);
    }
  }
`;

function Form({ carDetails = {}, onCloseModal }) {
  const [formSession, setFormSession] = useState(1);
  const { addCarPost, isUploadingPost } = useAddCarPost();
  const { updateCarPost, isUpdatingCarPost } = useUpdateCarPost();

  const updateSession = Boolean(carDetails.id);

  const { register, handleSubmit, reset, getValues, formState, trigger } =
    useForm({
      defaultValues: updateSession ? carDetails : {},
    });
  const { errors } = formState;

  function onSubmit(formData) {
    console.log(formData);
    if (!updateSession) {
      addCarPost(formData, {
        onSettled: () => {
          reset();
          onCloseModal?.();
        },
      });
    } else {
      updateCarPost(formData, {
        onSettled: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  async function handleNext() {
    const isValid = await trigger();
    if (isValid) {
      setFormSession((sessionNum) => sessionNum + 1);
    }
  }

  function handlePrevious() {
    if (formSession === 0) return;
    setFormSession((sessionNum) => sessionNum - 1);
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {formSession === 1 && (
          <fieldset>
            <legend>Basic Car Specs</legend>
            <InputContainer>
              <label htmlFor="car_name">Name</label>
              <input
                type="text"
                id="car_name"
                {...register("car_name", {
                  required: "This field is required",
                })}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="model">Model</label>
              <input
                type="text"
                id="model"
                {...register("model", { required: "This field is required" })}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                {...register("year", { required: "This field is required" })}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="engine">Engine</label>
              <input
                type="text"
                id="engine"
                {...register("engine", {
                  required: "This field is required",
                })}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="fuel">Fuel</label>
              <input
                type="text"
                id="fuel"
                {...register("fuel", { required: "This field is required" })}
              />
            </InputContainer>{" "}
            <InputContainer>
              <label htmlFor="power">Power</label>
              <input
                type="number"
                id="power"
                {...register("power", {
                  required: "This field is required",
                })}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="milleage">Milleage</label>
              <input
                type="number"
                id="milleage"
                {...register("milleage", {
                  required: "This field is required",
                })}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                {...register("contact", {
                  required: "This field is required",
                })}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                {...register("price", {
                  required: "This field is required",
                })}
              />
            </InputContainer>
          </fieldset>
        )}
        {formSession === 2 && (
          <fieldset>
            <legend>Additional Car Specs</legend>
            <div>
              <label htmlFor="color">Color</label>
              <input
                type="text"
                id="color"
                {...register("color", {
                  required: "This field is required",
                })}
              />
            </div>
            <div>
              <label htmlFor="body">Body</label>
              <input
                type="text"
                id="body"
                {...register("body", { required: "This field is required" })}
              />
            </div>

            <div>
              <label htmlFor="transmission">Transmission</label>
              <input
                type="text"
                id="transmission"
                {...register("transmission", {
                  required: "This field is required",
                })}
              />
            </div>
            <div>
              <label htmlFor="gear_number">Gears</label>
              <input
                type="number"
                id="gear_number"
                {...register("gear_number", {
                  required: "This field is required",
                })}
              />
            </div>
            <div>
              <label htmlFor="emission_standard">Emission</label>
              <input
                type="text"
                id="emission_standard"
                {...register("emission_standard", {
                  required: "This field is required",
                })}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                {...register("description")}
              />
            </div>
            <div>
              <button onClick={handlePrevious}>Previous</button>
            </div>
            <div>
              <button onClick={handleNext}>Next</button>
            </div>
          </fieldset>
        )}
        {formSession === 3 && (
          <fieldset>
            <legend>Optional Car Specs</legend>
            <div>
              <label htmlFor="version">Version</label>
              <input type="text" id="version" {...register("version")} />
            </div>
            <div>
              <label htmlFor="door_number">Doors</label>
              <input
                type="number"
                id="door_number"
                {...register("door_number")}
              />
            </div>
            <div>
              <label htmlFor="seat_number">Seats</label>
              <input
                type="number"
                id="seat_number"
                {...register("seat_number", {
                  required: "This field is required",
                })}
              />
            </div>

            <div>
              <label htmlFor="mpg">Mpg</label>
              <input type="number" id="mpg" {...register("mpg")} />
            </div>

            <div>
              <label htmlFor="location">Location</label>
              <input type="text" id="location" {...register("location")} />
            </div>

            <div>
              <label htmlFor="image">Image</label>
              <input type="file" id="image" {...register("image")} />
            </div>
            <div>
              <button onClick={handlePrevious}>Previous</button>
            </div>

            <div>
              <input type="submit" />
            </div>
          </fieldset>
        )}
        <ButtonsContainer>
          <button disabled={formSession === 1} onClick={handlePrevious}>
            Previous
          </button>
          <button onClick={handleNext}>Next</button>
        </ButtonsContainer>
      </StyledForm>
    </StyledContainer>
  );
}

export default Form;
