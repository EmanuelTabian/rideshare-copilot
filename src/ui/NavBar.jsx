import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Nav from "./Nav";

const StyledNavBar = styled.nav``;

function NavBar() {
  return (
    <StyledNavBar>
      <Nav />
    </StyledNavBar>
  );
}

export default NavBar;
