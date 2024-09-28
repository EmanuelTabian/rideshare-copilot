import styled from "styled-components";

import UserAvatar from "./UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
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
