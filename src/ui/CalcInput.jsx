import styled from "styled-components";

const Input = styled.input`
  color: white;
  border: none;
  border-radius: 8px;
  background-color: var(--color-brand-700);
`;

function CalcInput({ value, setValue, children }) {
  return (
    <>
      <span>{children}</span>
      <Input
        placeholder="Commission"
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value ? +e.target.value : "")}
      />
    </>
  );
}

export default CalcInput;
