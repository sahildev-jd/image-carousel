import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";

const Wrapper = styled.div`
  position: fixed;
  z-index: 500;
  padding-top: 100px;
  left: 35%;
  top: 0;
  width: auto;
  height: auto;
  overflow: auto;
  transition: all 0.3s ease-out;
`;
const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {
  const { show = false, onClose } = props;
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  });

  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop show={show} onClick={onClose} />
      {show ? <Wrapper>{props.children}</Wrapper> : null}
    </Fragment>,
    el
  );
};

export default Modal;
