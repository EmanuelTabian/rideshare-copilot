import styled from "styled-components";

const StyledMessage = styled.div`
  padding: 10px;
  border-radius: 5px;
  color: var(color-brand-600);
  font-size: 1rem;
  margin: 10px 0;
`;

function Message({ children }) {
  return <StyledMessage>{children}</StyledMessage>;
}

export default Message;
