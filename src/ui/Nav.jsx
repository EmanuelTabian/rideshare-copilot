import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiHome } from "react-icons/hi2";
import { FaCar } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const NavList = styled.ul`
  margin-left: 16px;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.3rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-600);
  }
`;

function Nav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
      </NavList>
      <NavList>
        <li>
          <StyledNavLink to="/cars">
            <FaCar />
            <span>Cars</span>
          </StyledNavLink>
        </li>
      </NavList>
      <NavList>
        <li>
          <StyledNavLink to="/calculator">
            <FaCalculator />
            <span>Calculator</span>{" "}
          </StyledNavLink>
        </li>
      </NavList>
      {/* Temporarily deactivate documents section as it doesn't take part of the MVP */}
      {/* <NavList>
        <li>
          <StyledNavLink to="/documents">Documents</StyledNavLink>
        </li>
      </NavList> */}
      <NavList>
        <li>
          <StyledNavLink to="/settings">
            <IoSettings />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default Nav;
