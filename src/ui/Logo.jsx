import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div``;

const Img = styled.img``;

function Logo() {
  return (
    <StyledLogo>
      <NavLink to="/dashboard">
        <Img src="logo.svg" alt="Rideshare logo" />
      </NavLink>
    </StyledLogo>
  );
}

export default Logo;
