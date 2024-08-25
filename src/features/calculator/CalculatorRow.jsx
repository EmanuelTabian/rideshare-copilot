import { IoPencilSharp } from "react-icons/io5";
import { IoTrashBinSharp } from "react-icons/io5";

import Table from "../../ui/Table";
import { dateFormatter } from "../../utils/helpers";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import UpdateCalculatorEntryForm from "./UpdateCalculatorEntryForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { TableCalculatorProvider } from "../../context/TableCalculatorContext";
import { useDeleteCalaculatorEntry } from "./useDeleteCalculatorEntry";

function CalculatorRow({ calcEntry, onCloseModal }) {
  const { deleteCalculatorEntry, isLoading } = useDeleteCalaculatorEntry();

  const {
    id,
    pub_date: pubDate,
    app_income: appIncome,
    commission,
    expenses,
    earnings,
  } = calcEntry;

  function handleDelete() {
    console.log("delete");

    deleteCalculatorEntry(id, {
      onSuccess: () => {
        onCloseModal?.();
      },
    });
  }

  return (
    <Table.Row>
      <div>{dateFormatter(pubDate)}</div>
      <div>{appIncome}</div>
      {commission ? <div>{Math.round(commission)}%</div> : <span>&mdash;</span>}
      {expenses ? <div>{expenses}</div> : <span>&mdash;</span>}
      {earnings ? <div>{earnings}</div> : <span>&mdash;</span>}

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
            <UpdateCalculatorEntryForm calcEntry={calcEntry} />
          </Modal.Window>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="calculator entry"
              // This value will correspond to the isLoading variable from react query
              disabled={false}
              // This value will correspond to deletion API service that will be built.
              onConfirm={handleDelete}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CalculatorRow;
