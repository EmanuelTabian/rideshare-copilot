import Button from "./Button";
import { IoPencilSharp } from "react-icons/io5";
import { IoTrashBinSharp } from "react-icons/io5";
import Modal from "./Modal";
import UpdateCalculatorEntryForm from "../features/calculator/UpdateCalculatorEntryForm";
import ConfirmDelete from "./ConfirmDelete";
function TableRowActions() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="edit">
          <Button>
            <IoPencilSharp />
          </Button>
        </Modal.Open>
        <Modal.Open opens="delete">
          <Button>
            <IoTrashBinSharp />
          </Button>
        </Modal.Open>
        <Modal.Window name="edit">
          <UpdateCalculatorEntryForm />
        </Modal.Window>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="calculator entry"
            // This value will correspond to the isLoading variable from react query
            disabled={false}
            // This value will correspond to deletion API service that will be built.
            onConfirm={() => console.log("cabin deleted")}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default TableRowActions;
