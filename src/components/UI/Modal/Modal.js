import React from "react";
import { Show, DontShow, ModalStyle } from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = React.memo(({ show, modalClosed, children }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div className={[ModalStyle, show ? Show : DontShow].join(" ")}>
        {children}
      </div>
    </>
  );
});

export default Modal;
