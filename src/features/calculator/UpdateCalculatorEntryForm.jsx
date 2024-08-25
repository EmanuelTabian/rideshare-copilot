import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUpdateCalculatorEntry } from "./useUpdateCalculatorEntry";
import { useTableCalculator } from "../../context/TableCalculatorContext";

function UpdateCalculatorEntryForm({ calcEntry, onCloseModal }) {
  const { id, app_income, commission, expenses, earnings } = calcEntry;

  const {
    income: calcIncome,
    commission: calcCommission,
    expenses: calcExpenses,
    earnings: calcEarnings,
    dispatch,
  } = useTableCalculator();

  const { updateCalculatorEntry, isLoading } = useUpdateCalculatorEntry();
  const { register, handleSubmit, reset, setValue, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    const payload = { ...data, id };
    console.log(payload);

    updateCalculatorEntry(payload, {
      onSuccess: () => {
        onCloseModal?.();
        dispatch();
      },
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Edit calculator entry</legend>
        <label htmlFor="app_income">App income:</label>
        <input
          type="number"
          {...register("app_income", { required: "This field is required" })}
          placeholder={app_income}
          value={calcIncome}
          onChange={(e) =>
            dispatch({
              type: "setIncome",
              payload: +e.target.value ? +e.target.value : "",
            })
          }
        />
        <label htmlFor="commission">Commission</label>
        <input
          type="number"
          {...register("commission")}
          placeholder={commission}
          value={calcCommission}
          onChange={(e) =>
            dispatch({
              type: "setCommission",
              payload: +e.target.value ? +e.target.value : "",
            })
          }
        />
        <label htmlFor="expenses">Expenses:</label>
        <input
          type="number"
          {...register("expenses")}
          placeholder={expenses}
          value={calcExpenses}
          onChange={(e) =>
            dispatch({
              type: "setExpenses",
              payload: +e.target.value ? +e.target.value : "",
            })
          }
        />
        <label htmlFor="earnings">Earnings:</label>
        <input
          type="number"
          disabled={true}
          {...register("earnings")}
          placeholder={earnings}
          value={calcEarnings}
          onChange={setValue("earnings", calcEarnings)}
        />
        <div>
          <Button>Save changes</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default UpdateCalculatorEntryForm;
