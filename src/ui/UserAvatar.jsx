import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";

const StyledUserData = styled.div`
  margin: 32px 16px;
`;

const Img = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  left: 34px;
  margin-right: 8px;

  @media (min-width: 480px) {
    left: 40px;
  }
`;
const StyledHeader = styled.h1`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }
`;

function UserAvatar() {
  const { user } = useUser();

  const avatar = "";
  const username = "";
  return (
    <StyledUserData>
      <StyledHeader>
        <span></span>
        Hi{" "}
        <span>
          <Img src="RC-logo.svg" alt="RC Logo" />
        </span>
        &nbsp;&nbsp; &nbsp;&nbsp;
        {user.name}
      </StyledHeader>
    </StyledUserData>
  );
}

export default UserAvatar;
