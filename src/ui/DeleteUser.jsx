import styled from "styled-components";

import { useUserDelete } from "../features/authentication/useUserDelete";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";

const StyledButton = styled.button`
  background-color: white;
  margin: 8px 8px 8px 24px;
  padding: 0.44rem 0.8rem;
  border: none;
  border-radius: 0 10px 10px 10px;
  font-size: 0.75rem;
  font-weight: 900;
  cursor: pointer;

  display: inline;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-brand-600);
    color: white;
  }
  @media (min-width: 480px) {
    font-size: 1rem;
  }
`;

function DeleteUser() {
  const { deleteUser, isLoading } = useUserDelete();
  function handleDeletion() {
    deleteUser();
  }

  return (
    <>
      <h1>Account Deletion</h1>
      <Modal>
        <Modal.Open opens="delete">
          <StyledButton>Delete account</StyledButton>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="account"
            disabled={isLoading}
            onConfirm={handleDeletion}
          />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default DeleteUser;
