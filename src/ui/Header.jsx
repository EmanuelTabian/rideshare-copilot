import styled from "styled-components";

import Nav from "./NavBar";
import UserAvatar from "./UserAvatar";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
export default Header;
