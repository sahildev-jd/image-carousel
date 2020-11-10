import React, { useEffect } from "react";
import styled from "styled-components";
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
`;

const Image = (props) => {
  const { name = "x", imageUrl = "", data, id } = props;

  useEffect(() => {
    if (data && id) {
      previewFile(data, id);
    }
  }, []);

  return (
    <Container>
      <ImageContainer>
        <StyledImage src={imageUrl} alt={name} id={`img-${id}`} />
      </ImageContainer>
    </Container>
  );
};

export default Image;
