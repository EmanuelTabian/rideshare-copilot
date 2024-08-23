function UpdateCalculatorEntryForm() {
  return (
    <form>
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
        <label htmlFor="earnings">App income:</label>
        {/* This field will compute the new values and perform a new calculation for the expenses */}
        <input disabled={true} type="number" {...register("earnings")} />
      </fieldset>
    </form>
  );
}

export default UpdateCalculatorEntryForm;
