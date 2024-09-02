import { useForm } from "react-hook-form";
import { useDirectUploadStart } from "./useDirectUploadStart";
import { useAddCarPost } from "./useAddCarPost";

function Form() {
  const { addCarPost, isUploadingPost } = useAddCarPost();
  const { directUploadStart, isLoading, data } = useDirectUploadStart();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(formData) {
    directUploadStart(formData);
    const dataWithImageKey = { ...formData, image_key: data.key };
    addCarPost(dataWithImageKey, {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Add a car rent post</legend>
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
            {...register("gear_number", { required: "This field is required" })}
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
          <input type="number" id="door_number" {...register("door_number")} />
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
          <textarea type="text" id="description" {...register("description")} />
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
          <label htmlFor="phone_number">Phone</label>
          <input
            type="tel"
            id="phone_number"
            {...register("phone_number", {
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
    </form>
  );
}

export default Form;
