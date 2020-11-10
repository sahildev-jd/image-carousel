import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Modal from "../../UI/Modal/Modal";
import previewFile from "./imageUtils";

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
const ImageContainer = styled.div`
  max-width: 150px;
  min-height: 150px;
  max-height: auto;
  float: left;
  margin: 10px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  ${(props) =>
    props.inModal &&
    css`
      max-height: 80vh;
    `}
`;

const Image = (props) => {
  const { data, id } = props;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data && id) {
      previewFile(data, id);
    }
  }, [showModal]);

  const onClickImage = () => {
    if (!showModal) {
      setShowModal(true);
    }
  };
  const closeModal = () => {
    console.log("closeModal");
    setShowModal(false);
  };

  const getImageComponent = (inModal) => (
    <StyledImage
      alt={id}
      id={`img-${id}`}
      onClick={onClickImage}
      inModal={inModal}
    />
  );

  return (
    <Container>
      {showModal && (
        <Modal show={showModal} onClose={closeModal}>
          {getImageComponent(true)}
        </Modal>
      )}
      <ImageContainer>{getImageComponent(false)}</ImageContainer>
    </Container>
  );
};

export default Image;
