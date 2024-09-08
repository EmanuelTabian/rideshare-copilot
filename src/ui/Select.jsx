// Component originally built by Jonas Schmedtmann.

function Select({ value, options, onChange }) {
  console.log(options);
  console.log(value);

  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
