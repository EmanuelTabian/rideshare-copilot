import styled from "styled-components";

const StyledError = styled.span`
  color: red;
  font-size: 0.8rem;
`;

function ErrorMessage({ children }) {
  return <StyledError>{children}</StyledError>;
}

export default ErrorMessage;
