import { useForm } from "react-hook-form";
import { useDirectUploadStart } from "./useDirectUploadStart";

function Form() {
  const { directUploadStart, isLoading } = useDirectUploadStart();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(formData) {
    directUploadStart(formData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Add a car rent post</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
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
          <label htmlFor="gears">Gears</label>
          <input
            type="number"
            id="gears"
            {...register("gears", { required: "This field is required" })}
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
          <label htmlFor="seats">Seats</label>
          <input
            type="number"
            id="seats"
            {...register("seats", {
              required: "This field is required",
            })}
          />
        </div>
        <div>
          <label htmlFor="doors">Doors</label>
          <input
            type="number"
            id="doors"
            {...register("doors", {
              required: "This field is required",
            })}
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
          <input
            type="number"
            id="mpg"
            {...register("mpg", {
              required: "This field is required",
            })}
          />
        </div>
        <div>
          <label htmlFor="doors">Doors</label>
          <input
            type="number"
            id="doors"
            {...register("doors", {
              required: "This field is required",
            })}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            {...register("description", {
              required: "This field is required",
            })}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            {...register("location", {
              required: "This field is required",
            })}
          />
        </div>
        <div>
          <label htmlFor="emmision">Emmision</label>
          <input
            type="text"
            id="emmision"
            {...register("emmision", {
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
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "This field is required",
            })}
          />
        </div>
        {/* <div>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" {...register("image")} />
        </div> */}
        <div>
          <input type="submit" />
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
