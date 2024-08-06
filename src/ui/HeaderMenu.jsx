import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoSettings } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "./Button";

const StyledHeaderMenu = styled.div``;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <NavLink to="/settings">
        <IoSettings />
      </NavLink>
      <Button>
        <IoLogOutOutline />
      </Button>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
