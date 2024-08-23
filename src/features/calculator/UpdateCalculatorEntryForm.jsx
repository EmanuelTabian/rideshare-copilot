import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUpdateCalculatorEntry } from "./useUpdateCalculatorEntry";

function UpdateCalculatorEntryForm({ calculatorEntryID }) {
  const { updateCalculatorEntry, isLoading } = useUpdateCalculatorEntry();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const payload = { ...data, calculatorEntryID };

    updateCalculatorEntry(payload);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Edit calculator entry</legend>
        <label htmlFor="app_income">App income:</label>
        <input
          type="number"
          {...register("app_income", { required: "This field is required" })}
        />
        <label htmlFor="commission">Commission</label>
        <input type="number" {...register("commission")} />
        <label htmlFor="expenses">Expenses:</label>
        <input type="number" {...register("expenses")} />
        <label htmlFor="earnings">Earnings</label>
        {/* This field will compute the new values and perform a new calculation for the expenses */}
        <input disabled={true} type="number" {...register("earnings")} />
        <div>
          <Button>Save changes</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default UpdateCalculatorEntryForm;
