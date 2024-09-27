import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUpdateCalculatorEntry } from "./useUpdateCalculatorEntry";
import { useTableCalculator } from "../../context/TableCalculatorContext";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: 0 10px 10px 10px;
  font-size: 0.75rem;
  font-weight: 900;
  cursor: pointer;

  display: inline;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
    color: white;
  }
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;

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
        reset();
        dispatch({ type: "resetState" });
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
          value={calcEarnings}
          onChange={setValue("earnings", calcEarnings)}
        />
        <div>
          <StyledButton>Save changes</StyledButton>
        </div>
      </fieldset>
    </form>
  );
}

export default UpdateCalculatorEntryForm;
