import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";
import Image from "./Image/Image";

const Container = styled.div`
  display: flex;
  margin: 0 80px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  box-shadow: 2px 2px #eee;
  min-height: 220px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;

  @media (min-width: 1000px) {
    min-width: 680px;
  }
`;

const Carousel = (props) => {
  const { images } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setPerPage] = useState(4);

  const getImagesPerPage = () => {
    if (window) {
      if (window.innerWidth < 600) {
        setPerPage(1);
      } else if (window.innerWidth < 700) {
        setPerPage(2);
      } else if (window.innerWidth < 900) {
        setPerPage(3);
      } else {
        setPerPage(4);
      }
    }
  };

  useEffect(() => {
    getImagesPerPage();
    window.addEventListener("resize", getImagesPerPage);

    return () => {
      window.removeEventListener("resize", getImagesPerPage);
    };
  }, []);

  const nextButtonHandler = () => {
    if (currentPage < Math.ceil(images.length / imagesPerPage)) {
      setCurrentPage((currPage) => currPage + 1);
    }
  };

  const previousButtonHandler = () => {
    if (currentPage > 1) {
      setCurrentPage((currPage) => currPage - 1);
    }
  };
  if (images.length === 0) {
    return null;
  }

  const firstIndex = (currentPage - 1) * imagesPerPage;
  const lastIndex = currentPage * imagesPerPage;
  const visibleImages = images && images.slice(firstIndex, lastIndex);

  return (
    <Container>
      <Button onClick={previousButtonHandler}>Previous</Button>
      <ImagesContainer>
        {visibleImages.map((image, idx) => (
          <Image data={image} id={idx + 1} key={image.lastModified} />
        ))}
      </ImagesContainer>
      <Button onClick={nextButtonHandler}>Next</Button>
    </Container>
  );
};

export default Carousel;
