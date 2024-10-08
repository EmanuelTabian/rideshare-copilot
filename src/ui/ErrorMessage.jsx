const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
`;

function ErrorMessage({ children }) {
  return <StyledError>{children}</StyledError>;
}

export default ErrorMessage;
