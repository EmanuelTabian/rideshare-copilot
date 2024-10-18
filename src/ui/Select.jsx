import styled from "styled-components";

// Component originally built by Jonas Schmedtmann.

const StyledSelect = styled.select`
  background-color: white;
  font-size: 1rem;
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  outline: none;

  &:focus {
    outline: none;
  }
`;

function Select({ value, options, onChange }) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
