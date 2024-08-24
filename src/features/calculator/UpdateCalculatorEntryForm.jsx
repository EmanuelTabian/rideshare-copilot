import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUpdateCalculatorEntry } from "./useUpdateCalculatorEntry";
import { UseCalculator } from "../../context/CalculatorContext";

function UpdateCalculatorEntryForm({ calculatorEntryID }) {
  const {
    income,
    setIncome,
    rideCom,
    setRideCom,
    otherExp,
    setOtherExp,
    netIncome,
  } = UseCalculator();
  const { updateCalculatorEntry, isLoading } = useUpdateCalculatorEntry();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);

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
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <label htmlFor="commission">Commission</label>
        <input
          type="number"
          {...register("commission")}
          value={rideCom}
          onChange={(e) => setRideCom(e.target.value)}
        />
        <label htmlFor="expenses">Expenses:</label>
        <input
          type="number"
          {...register("expenses")}
          value={otherExp}
          onChange={(e) => setOtherExp(e.target.value)}
        />
        <label htmlFor="earnings">Earnings:</label>
        <input
          type="number"
          value={netIncome}
          disabled={true}
          {...register("earnings")}
        />
        <div>
          <Button>Save changes</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default UpdateCalculatorEntryForm;
