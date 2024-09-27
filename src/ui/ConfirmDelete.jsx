import styled from "styled-components";
import Button from "./Button";

const StyledConfirmation = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  border-radius: 32px;
  background-color: white;
  button {
    position: relative;
    font-weight: 700;
    margin: 8px;
    padding: 8px 16px;
    color: black;
    border-radius: 0 16px 16px 16px;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: var(--color-brand-2-100);
    color: white;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

// COnfirmation prompt originally designed by Jonas Schmedtmann.
function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmation>
      <h3>Delete {resourceName}</h3>
      <p>Are you sure you want to delete this {resourceName} permanently?</p>
      <ButtonsContainer>
        <button disabled={disabled} onClick={onCloseModal}>
          Cancel
        </button>
        <button disabled={disabled} onClick={onConfirm}>
          Delete
        </button>
      </ButtonsContainer>
    </StyledConfirmation>
  );
}

export default ConfirmDelete;
