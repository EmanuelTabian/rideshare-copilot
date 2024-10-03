import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoSettings } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";

import { useLogout } from "../features/authentication/useLogout";
import { useState } from "react";

const LogoutButton = styled.button`
  padding: 16px 0;
  color: white;
  background-color: transparent;
  font-size: 1.2rem;
  border: none;
  font-weight: 600;
`;

const StyledHeaderMenu = styled.div`
  & svg {
    font-size: 1.7rem;

    transition: color 0.2s;
  }
  & svg:hover {
    color: var(--color-brand-600);
  }

  & button {
    padding: 10px;
  }
  @media (min-width: 480px) {
    & svg {
      font-size: 1.7rem;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;

  @media (max-width: 480px) {
    display: none;
  }
`;
const StyledBurger = styled.button`
  border: none;
  background-color: white;

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
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;

  & a {
    padding-bottom: 5px;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
  }

  & a:hover {
    color: var(--color-grey-400);
  }
  & svg {
    color: white;
  }
`;

const StyledNavButton = styled.button`
  border: none;
  background-color: inherit;
`;

function HeaderMenu() {
  const [burgerActive, setBurgerActive] = useState(false);
  const { logout, isLoading } = useLogout();

  return (
    <StyledHeaderMenu>
      <StyledButton onClick={logout}>
        <IoLogOutOutline />
      </StyledButton>
      <StyledButton>
        <NavLink to="/settings">
          <IoSettings />
        </NavLink>
      </StyledButton>
      <StyledBurger onClick={() => setBurgerActive(true)}>
        <HiBars3 />
      </StyledBurger>
      {burgerActive && (
        <StyledOverlay>
          <StyledNavButton onClick={() => setBurgerActive(false)}>
            <HiXMark />
          </StyledNavButton>
          <StyledNavButton onClick={() => setBurgerActive(false)}>
            <nav>
              <ul>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/cars">Cars</NavLink>
                </li>
                <li>
                  <NavLink to="/calculator">Calculator</NavLink>
                </li>

                <li>
                  <NavLink to="/settings">Settings</NavLink>
                </li>
              </ul>
            </nav>
          </StyledNavButton>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </StyledOverlay>
      )}
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
