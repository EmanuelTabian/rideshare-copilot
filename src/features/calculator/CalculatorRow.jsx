import { IoPencilSharp } from "react-icons/io5";
import { IoTrashBinSharp } from "react-icons/io5";

import Table from "../../ui/Table";
import { dateFormatter } from "../../utils/helpers";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import UpdateCalculatorEntryForm from "./UpdateCalculatorEntryForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteCalaculatorEntry } from "./useDeleteCalculatorEntry";
import styled from "styled-components";

const StyledButton = styled.button`
  /* padding: 0.44rem 0.8rem; */
  border: none;
  border-radius: 0 10px 10px 10px;
  font-size: 0.8rem;
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
    padding: 0.44rem 0.8rem;
  }
`;

function CalculatorRow({ calcEntry }) {
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
    deleteCalculatorEntry(id);
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
            <StyledButton>
              <IoPencilSharp />
            </StyledButton>
          </Modal.Open>
          <Modal.Open opens="delete">
            <StyledButton>
              <IoTrashBinSharp />
            </StyledButton>
          </Modal.Open>
          <Modal.Window name="edit">
            <UpdateCalculatorEntryForm calcEntry={calcEntry} />
          </Modal.Window>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="calculator entry"
              disabled={false}
              onConfirm={handleDelete}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CalculatorRow;
