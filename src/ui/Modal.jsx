import { cloneElement, createContext, useState } from "react";

// Modal compound component originally designed by Jonas Schmedtmann.

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  // We are not able to attatch the handler directly on the button so we're cloning the element and attatch it here
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

export default Modal;
