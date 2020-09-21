import React from "react";
import classes from "./Modal.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = React.memo((props) => {
  return (
    <Auxiliary>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={[
          classes.Modal,
          props.show ? classes.Show : classes.DontShow,
        ].join(" ")}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
});

export default Modal;
