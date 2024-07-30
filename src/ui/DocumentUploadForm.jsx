import { useForm } from "react-hook-form";
import Button from "./Button";

function DocumentUploadForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  return (
    <form>
      <fieldset>
        <legend>Fill in the document form</legend>
        <div>
          <label htmlFor="document">Document:</label>
          <input
            type="text"
            {...register("dcoument", { required: "This field is required" })}
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="date"
            {...register("expirationDate", {
              required: "This field is required",
            })}
          />
        </div>
        <div>
          <label htmlFor="documentDescription">Description (optional)</label>
          <textarea
            type="date"
            {...register("documentDescription", {
              required: "This field is required",
            })}
          />
        </div>
        <Button>Save document</Button>
      </fieldset>
    </form>
  );
}

export default DocumentUploadForm;
