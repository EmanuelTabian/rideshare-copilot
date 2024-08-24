import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUpdateCalculatorEntry } from "./useUpdateCalculatorEntry";
import { useTableCalculator } from "../../context/TableCalculatorContext";

function UpdateCalculatorEntryForm({ calcEntry, onCloseModal }) {
  const {
    income: calcIncome,
    commission: calcCommission,
    expenses: calcExpenses,
    earnings: calcEarnings,
    dispatch,
  } = useTableCalculator();

  const { app_income, commission, earnings, expenses, id } = calcEntry;
  console.log(app_income, commission, earnings, expenses, id);

  const { updateCalculatorEntry, isLoading } = useUpdateCalculatorEntry();
  const { register, handleSubmit, reset, setValue, formState } = useForm({
    defaultValues: {
      app_income,
      commission,
      expenses,
      earnings: earnings,
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    const payload = { ...data, id };
    console.log(payload);

    updateCalculatorEntry(payload, {
      onSuccess: () => {
        onCloseModal?.();
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
          value={calcIncome}
          onChange={(e) =>
            dispatch({ type: "setIncome", payload: +e.target.value })
          }
        />
        <label htmlFor="commission">Commission</label>
        <input
          type="number"
          {...register("commission")}
          value={calcCommission}
          onChange={(e) =>
            dispatch({ type: "setCommission", payload: +e.target.value })
          }
        />
        <label htmlFor="expenses">Expenses:</label>
        <input
          type="number"
          {...register("expenses")}
          value={calcExpenses}
          onChange={(e) =>
            dispatch({ type: "setExpenses", payload: +e.target.value })
          }
        />
        <label htmlFor="earnings">Earnings:</label>
        <input
          type="number"
          disabled={true}
          {...register("earnings")}
          value={calcEarnings}
          onChange={setValue("earnings", String(calcEarnings))}
        />
        <div>
          <Button>Save changes</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default UpdateCalculatorEntryForm;
