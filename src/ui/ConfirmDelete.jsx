import Button from "./Button";

// COnfirmation prompt originally designed by Jonas Schmedtmann.
function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div>
      <h3>Delete {resourceName}</h3>
      <p>Are you sure you want to delelete this {resourceName} permanently?</p>
      <div>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button onClick={onConfirm}>Delete</Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
