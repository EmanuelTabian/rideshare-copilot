import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoSettings } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Button from "./Button";
import { useLogout } from "../features/authentication/useLogout";

const StyledHeaderMenu = styled.div`
  margin: 0 16px;

  & svg {
    font-size: 1.4rem;
    transition: color 0.2s;
  }
  & svg:hover {
    color: var(--color-brand-600);
  }
  @media (min-width: 480px) {
    & svg {
      font-size: 1.5rem;
    }
  }
`;
const StyledButton = styled.button`
  margin-left: 1rem;
  border: none;
`;
function HeaderMenu() {
  const { logout, isLoadin } = useLogout();

  return (
    <StyledHeaderMenu>
      <NavLink to="/settings">
        <IoSettings />
      </NavLink>
      <StyledButton onClick={logout}>
        <IoLogOutOutline />
      </StyledButton>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
