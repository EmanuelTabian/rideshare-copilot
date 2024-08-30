import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CarPostForm from "../carposts/CarPostForm";

function PostCar() {
  return (
    <Modal>
      <Modal.Open opens="post-form">
        <Button>New post</Button>
      </Modal.Open>
      <Modal.Window name="post-form">
        <CarPostForm />
      </Modal.Window>
    </Modal>
  );
}

export default PostCar;
