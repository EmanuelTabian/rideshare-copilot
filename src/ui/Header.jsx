import styled from "styled-components";

import Nav from "./NavBar";
import UserAvatar from "./UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.div``;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
export default Header;
