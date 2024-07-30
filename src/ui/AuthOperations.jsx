import { NavLink } from "react-router-dom";

function AuthOperations() {
  return (
    <>
      <div>
        <span>Need an account? </span>
        <span>
          <NavLink to="/signup">Sign up</NavLink>
        </span>
      </div>
      <div>
        <span>Forgot your password? </span>
        <span>
          <NavLink to="/password-reset">Reset password</NavLink>
        </span>
      </div>
    </>
  );
}

export default AuthOperations;
