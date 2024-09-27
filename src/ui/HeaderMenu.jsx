import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoSettings } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import Button from "./Button";
import { useLogout } from "../features/authentication/useLogout";
import NavBar from "./NavBar";

const StyledHeaderMenu = styled.div`
  margin: 0 16px;

  & svg {
    font-size: 1.2rem;
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
const StyledBurger = styled.button`
  margin-left: 1rem;
  border: none;

  @media (min-width: 480px) {
    display: none;
  }
`;

const StyledOverlay = styled.div`
  width: 50%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: var(--color-brand-400);
  transition: transform 0.3s;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start */
  justify-content: flex-start;
  padding: 1rem;
  &.active {
    transform: translateX(0);
  }

  & nav {
    width: 100%;
    margin: 1.6em 1em;
  }
  & a {
    color: white;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
  }

  & a:hover {
    color: var(--color-grey-400);
  }
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
      <StyledBurger>
        <HiBars3 />
      </StyledBurger>
      <StyledOverlay>
        <NavBar />
      </StyledOverlay>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
