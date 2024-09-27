import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  margin-left: 16px;
  font-size: 1.2rem;
  @media (max-width: 480px) {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)``;

function Nav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        </li>
      </NavList>
      <NavList>
        <li>
          <StyledNavLink to="/cars">Cars</StyledNavLink>
        </li>
      </NavList>
      <NavList>
        <li>
          <StyledNavLink to="/calculator">Calculator</StyledNavLink>
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
          <StyledNavLink to="/settings">Settings</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default Nav;
