import React, { Fragment } from "react";
import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";

const Wrapper = styled.div`
  position: fixed;
  z-index: 500;
  padding-top: 100px;
  /* left: 30%; */
  top: 0;
  width: auto;
  height: auto;
  overflow: auto;
  transition: all 0.3s ease-out;
`;

const Modal = (props) => {
  const { show = false, onClose } = props;

  return (
    <Fragment>
      <Backdrop show={show} onClick={onClose} />
      {show ? <Wrapper>{props.children}</Wrapper> : null}
    </Fragment>
  );
};

export default Modal;
