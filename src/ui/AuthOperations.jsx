import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Signup = styled.span`
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: var(--color-brand-600);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

function AuthOperations() {
  return (
    <>
      <StyledDiv>
        <span>Need an account? </span>
        <Signup>
          <NavLink to="/signup">Sign up</NavLink>
        </Signup>
      </StyledDiv>
      {/* Comment out password reset as it doens't take part of the MVP */}
      {/* <div>
        <span>Forgot your password? </span>
        <span>
          <NavLink to="/password-reset">Reset password</NavLink>
        </span>
      </div> */}
    </>
  );
}

export default AuthOperations;
