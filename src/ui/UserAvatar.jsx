import styled from "styled-components";

const StyledUserAvatar = styled.div``;
const Avatar = styled.img``;

function UserAvatar() {
  const avatar = "";
  const username = "";
  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${username}`}
      />
      <span>%Username%</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
