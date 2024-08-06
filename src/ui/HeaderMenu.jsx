import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoSettings } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "./Button";
import { useLogout } from "../features/authentication/useLogout";

const StyledHeaderMenu = styled.div``;

function HeaderMenu() {
  const { logout, isLoadin } = useLogout();

  return (
    <StyledHeaderMenu>
      <NavLink to="/settings">
        <IoSettings />
      </NavLink>
      <Button>
        <IoLogOutOutline onClick={logout} />
      </Button>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
