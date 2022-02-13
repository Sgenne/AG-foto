import { useEffect } from "react";
import "./Modal.css";

interface ModalProps {
  children: JSX.Element;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <>
      <div className="modal__background" onClick={onClose} />
      <div className="modal">{children}</div>
    </>
  );
};

export default Modal;
