import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-brand-600);
  color: white;
  padding: 10px 21px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin: 16px auto;
  display: block;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
