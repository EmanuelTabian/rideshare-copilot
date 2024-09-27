import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Nav from "./Nav";
import Logo from "./Logo";

const StyledNavBar = styled.nav``;

function NavBar() {
  return (
    <StyledNavBar>
      <Nav />
    </StyledNavBar>
  );
}

export default NavBar;
