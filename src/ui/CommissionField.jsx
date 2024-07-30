function CommissionField({ setValue, trackValue, children }) {
  return (
    <div>
      <span>{children}</span>
      <input
        type="number"
        value={trackValue}
        onChange={(e) => setValue(+e.target.value ? +e.target.value : "")}
      />
    </div>
  );
}

export default CommissionField;
