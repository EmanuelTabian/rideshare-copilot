import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { useCloseForm } from "../hooks/useCloseForm";
import { set } from "date-fns";

const StyledModal = styled.div`
  overflow: scroll;
  height: 100%;
  width: 100%;
  max-width: 720px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(10, 146, 69, 0.8);
`;

const CloseButton = styled.button`
  font-size: 1.3rem;
  color: white;
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  background: none;
  cursor: pointer;
  border: none;
  transition: color 0.3s;

  &:hover {
    color: var(--color-gray-400);
  }
`;

const StyledDiv = styled.div`
  height: 100%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

// Modal compound component originally designed by Jonas Schmedtmann.

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openName, setOpenName] = useState("");

  const close = () => {
    setOpenName("");
    setIsOpen(false);
  };
  const open = setOpenName;

  useEffect(
    function () {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
      return () => {
        document.body.style.overflow = "scroll";
      };
    },
    [isOpen]
  );

  return (
    <ModalContext.Provider value={{ openName, close, open, isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open, setIsOpen } = useContext(ModalContext);
  // We are not able to attatch the handler directly on the button so we're cloning the element and attatch it here
  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
      setIsOpen(true);
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useCloseForm(close);

  if (name !== openName) return null;
  // Create a portel to append the element directly to the body in order to avoid event bubbling and capturing issues
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <CloseButton onClick={close}>
          <IoCloseCircleOutline />
        </CloseButton>
        <StyledDiv>{cloneElement(children, { onCloseModal: close })}</StyledDiv>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
