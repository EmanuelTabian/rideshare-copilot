import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoSettings } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const StyledHeaderMenu = styled.div``;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <NavLink to="/settings">
        <IoSettings />
      </NavLink>
      <NavLink to="/settings">
        <IoLogOutOutline />
      </NavLink>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
