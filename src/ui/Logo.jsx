import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div``;

function Logo() {
  return (
    <StyledLogo>
      <NavLink to="/dashboard">
        <img src="../../public/RC-logo.svg" alt="Rideshare logo" />
      </NavLink>
    </StyledLogo>
  );
}

export default Logo;
