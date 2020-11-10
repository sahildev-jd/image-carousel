import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Backdrop = (props) => {
  const { show = false, onClick } = props;

  return show ? <Container onClick={onClick} /> : null;
};

export default Backdrop;
