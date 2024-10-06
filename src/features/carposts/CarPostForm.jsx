import { useForm } from "react-hook-form";
import { useAddCarPost } from "./useAddCarPost";
import { useUpdateCarPost } from "./useUpdateCarPost";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: rgba(10, 146, 69, 0.8);
  color: white;
  font-size: 0.8rem;
`;

const StyledForm = styled.form`
  div {
    padding: 2px;
    display: grid;
    grid-template-columns: 4rem 12rem;
    gap: 1rem;
  }
  @media (min-width: 480px) {
    div {
      grid-template-columns: 4rem 1fr;
    }
  }

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
  div:last-of-type {
    display: flex;
    justify-content: center;
  }
`;

function Form({ carDetails = {}, onCloseModal }) {
  const [formSession, setFormSession] = useState(1);
  const { addCarPost, isUploadingPost } = useAddCarPost();
  const { updateCarPost, isUpdatingCarPost } = useUpdateCarPost();

  const updateSession = Boolean(carDetails.id);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: updateSession ? carDetails : {},
  });
  const { errors } = formState;

  function onSubmit(formData) {
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
  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Add a car rental post</legend>
          <div>
            <label htmlFor="car_name">Name</label>
            <input
              type="text"
              id="car_name"
              {...register("car_name", { required: "This field is required" })}
            />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model"
              {...register("model", { required: "This field is required" })}
            />
          </div>
          <div>
            <label htmlFor="version">Version</label>
            <input type="text" id="version" {...register("version")} />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              {...register("year", { required: "This field is required" })}
            />
          </div>
          <div>
            <label htmlFor="engine">Engine</label>
            <input
              type="text"
              id="engine"
              {...register("engine", { required: "This field is required" })}
            />
          </div>
          <div>
            <label htmlFor="fuel">Fuel</label>
            <input
              type="text"
              id="fuel"
              {...register("fuel", { required: "This field is required" })}
            />
          </div>{" "}
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
            <label htmlFor="door_number">Doors</label>
            <input
              type="number"
              id="door_number"
              {...register("door_number")}
            />
          </div>
          <div>
            <label htmlFor="milleage">Milleage</label>
            <input
              type="number"
              id="milleage"
              {...register("milleage", {
                required: "This field is required",
              })}
            />
          </div>
          <div>
            <label htmlFor="power">Power</label>
            <input
              type="number"
              id="power"
              {...register("power", {
                required: "This field is required",
              })}
            />
          </div>
          <div>
            <label htmlFor="mpg">Mpg</label>
            <input type="number" id="mpg" {...register("mpg")} />
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
            <label htmlFor="location">Location</label>
            <input type="text" id="location" {...register("location")} />
          </div>
          <div>
            <label htmlFor="emission_standard">Emmision</label>
            <input
              type="text"
              id="emission_standard"
              {...register("emission_standard", {
                required: "This field is required",
              })}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              {...register("price", {
                required: "This field is required",
              })}
            />
          </div>
          <div>
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              {...register("contact", {
                required: "This field is required",
              })}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="file" id="image" {...register("image")} />
          </div>
          <div>
            <input type="submit" />
          </div>
        </fieldset>
      </StyledForm>
    </StyledContainer>
  );
}

export default Form;
