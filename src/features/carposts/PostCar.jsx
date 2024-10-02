import styled from "styled-components";
import Modal from "../../ui/Modal";
import CarPostForm from "../carposts/CarPostForm";
import Button from "../../ui/Button";

const StyledButton = styled.button`
  background-color: var(--color-grey-300);
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: 0 10px 10px 10px;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;

  display: block;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
    color: white;
  }
`;

function PostCar() {
  return (
    <Modal>
      <Modal.Open opens="post-form">
        <StyledButton>+New post</StyledButton>
      </Modal.Open>
      <Modal.Window name="post-form">
        <CarPostForm />
      </Modal.Window>
    </Modal>
  );
}

export default PostCar;
