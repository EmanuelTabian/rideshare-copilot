import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";

const StyledUserAvatar = styled.div``;
const Avatar = styled.img``;

function UserAvatar() {
  const { user } = useUser();

  const avatar = "";
  const username = "";
  return (
    <StyledUserAvatar>
      {/* Avatar will be commented out as it doen't take part of the MVP */}
      {/* <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${user.name}`}
      /> */}
      <h1>Hi {user.name}</h1>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
