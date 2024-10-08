import { useForm } from "react-hook-form";
import { useAddCarPost } from "./useAddCarPost";
import { useUpdateCarPost } from "./useUpdateCarPost";
import ErrorMessage from "../../ui/ErrorMessage";
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
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
`;

const TextareaContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: inherit;
  & textarea {
    font-size: 1.2rem;
    resize: none;
    height: 50%;
  }
`;
const StyledError = styled.div`
  position: absolute;
  right: 32px;
  margin: 0 8px;
`;
const StyledForm = styled.form`
  height: 100%;

  fieldset {
    height: inherit;
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

  const fieldNames = {
    1: [
      "car_name",
      "model",
      "year",
      "engine",
      "fuel",
      "power",
      "milleage",
      "contact",
      "price",
    ],
    2: [
      "color",
      "body",
      "transmission",
      "gear_number",
      "emission_standard",
      "description",
    ],
    3: ["version", "door_number", "seat_number", "mpg", "location", "image"],
  };

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

  async function handleNext(e) {
    console.log("click");

    const isValid = await trigger(fieldNames[formSession]);

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
              <label htmlFor="car_name">Name:</label>
              <input
                placeholder={errors?.car_name ? "" : "Manufacturer"}
                type="text"
                id="car_name"
                {...register("car_name", {
                  required: "This field is required",
                })}
              />
              {errors?.car_name && (
                <StyledError>
                  <ErrorMessage>{errors?.car_name?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="model">Model:</label>
              <input
                placeholder={errors?.model ? "" : "Model"}
                type="text"
                id="model"
                {...register("model", { required: "This field is required" })}
              />
              {errors?.model && (
                <StyledError>
                  <ErrorMessage>{errors?.model?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="year">Year:</label>
              <input
                placeholder={errors?.year ? "" : "Production date"}
                type="text"
                id="year"
                {...register("year", { required: "This field is required" })}
              />
              {errors?.year && (
                <StyledError>
                  <ErrorMessage>{errors?.year?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="engine">Engine:</label>
              <input
                placeholder={
                  errors?.engine
                    ? ""
                    : "Engine type/size/number or any relevant info"
                }
                type="text"
                id="engine"
                {...register("engine", {
                  required: "This field is required",
                })}
              />
              {errors?.engine && (
                <StyledError>
                  <ErrorMessage>{errors?.engine?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="fuel">Fuel:</label>
              <input
                placeholder={errors?.fuel ? "" : "Type of fuel"}
                type="text"
                id="fuel"
                {...register("fuel", { required: "This field is required" })}
              />
              {errors?.fuel && (
                <StyledError>
                  <ErrorMessage>{errors?.fuel?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>{" "}
            <InputContainer>
              <label htmlFor="power">Power:</label>
              <input
                placeholder={
                  errors?.power ? "" : "Power measured in HP (number)"
                }
                type="number"
                id="power"
                {...register("power", {
                  required: "This field is required",
                })}
              />
              {errors?.power && (
                <StyledError>
                  <ErrorMessage>{errors?.power?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="milleage">Mileage:</label>
              <input
                placeholder={
                  errors?.milleage ? "" : "Mileage measured in km (number)"
                }
                type="number"
                id="milleage"
                {...register("milleage", {
                  required: "This field is required",
                })}
              />
              {errors?.milleage && (
                <StyledError>
                  <ErrorMessage>{errors?.milleage?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="contact">Contact:</label>
              <input
                placeholder={errors?.contact ? "" : "Phone number or email"}
                type="text"
                id="contact"
                {...register("contact", {
                  required: "This field is required",
                })}
              />
              {errors?.contact && (
                <StyledError>
                  <ErrorMessage>{errors?.contact?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="price">Price:</label>
              <input
                placeholder={errors?.price ? "" : "Price in € (number)"}
                type="number"
                id="price"
                {...register("price", {
                  required: "This field is required",
                })}
              />
              {errors?.price && (
                <StyledError>
                  <ErrorMessage>{errors?.price?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <ButtonsContainer>
              <button disabled={formSession === 1} onClick={handlePrevious}>
                Previous
              </button>
              <button onClick={handleNext}>Next</button>
            </ButtonsContainer>
          </fieldset>
        )}
        {formSession === 2 && (
          <fieldset>
            <legend>Additional Car Specs</legend>
            <InputContainer>
              <label htmlFor="color">Color:</label>
              <input
                placeholder={errors?.color ? "" : "Car color"}
                type="text"
                id="color"
                {...register("color", {
                  required: "This field is required",
                })}
              />
              {errors?.color && (
                <StyledError>
                  <ErrorMessage>{errors?.color?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="body">Body:</label>
              <input
                placeholder={errors?.body ? "" : "Hatchback, sedan, SUV etc."}
                type="text"
                id="body"
                {...register("body", { required: "This field is required" })}
              />
              {errors?.body && (
                <StyledError>
                  <ErrorMessage>{errors?.body?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>

            <InputContainer>
              <label htmlFor="transmission">Transmission:</label>
              <input
                placeholder={
                  errors?.transmission
                    ? ""
                    : "Automatic, manual, semi-automatic etc."
                }
                type="text"
                id="transmission"
                {...register("transmission", {
                  required: "This field is required",
                })}
              />
              {errors?.transmission && (
                <StyledError>
                  <ErrorMessage>{errors?.transmission?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="gear_number">Gears:</label>
              <input
                placeholder={errors?.gear_number ? "" : "Number of gears"}
                type="number"
                id="gear_number"
                {...register("gear_number", {
                  required: "This field is required",
                })}
              />
              {errors?.gear_number && (
                <StyledError>
                  <ErrorMessage>{errors?.gear_number?.message}*</ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="emission_standard">Emission:</label>
              <input
                placeholder={
                  errors?.emission_standard ? "" : "Euro 5, Euro 6 etc."
                }
                type="text"
                id="emission_standard"
                {...register("emission_standard", {
                  required: "This field is required",
                })}
              />
              {errors?.emission_standard && (
                <StyledError>
                  <ErrorMessage>
                    {errors?.emission_standard?.message}*
                  </ErrorMessage>
                </StyledError>
              )}
            </InputContainer>
            <TextareaContainer>
              <label htmlFor="description">Description (optional):</label>
              <textarea
                placeholder="Additional information about the car"
                type="text"
                id="description"
                {...register("description")}
              />
            </TextareaContainer>
            <ButtonsContainer>
              <button disabled={formSession === 1} onClick={handlePrevious}>
                Previous
              </button>
              <button onClick={handleNext}>Next</button>
            </ButtonsContainer>
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
            <ButtonsContainer>
              <button disabled={formSession === 1} onClick={handlePrevious}>
                Previous
              </button>
              <button type="submit">
                {updateSession ? "Update" : "Submit"}
              </button>
            </ButtonsContainer>
          </fieldset>
        )}
      </StyledForm>
    </StyledContainer>
  );
}

export default Form;
