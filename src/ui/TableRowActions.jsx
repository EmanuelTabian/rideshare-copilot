import Button from "./Button";
import { IoPencilSharp } from "react-icons/io5";
import { IoTrashBinSharp } from "react-icons/io5";
function TableRowActions() {
  return (
    <div>
      <Button>
        <IoPencilSharp />
      </Button>
      <Button>
        <IoTrashBinSharp />
      </Button>
    </div>
  );
}

export default TableRowActions;
