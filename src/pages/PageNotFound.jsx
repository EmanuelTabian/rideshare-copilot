import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";

const StyledPageNotFound = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1rem;
`;

const Box = styled.div`
  padding: 2rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
  & button {
    border: 1px solid #0c9444;
    border-radius: 10px;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }
  & button:hover {
    background-color: #beffd9;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <h1>The page you are looking for could not found! 😥 </h1>
        <button onClick={moveBack}>Go back</button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
