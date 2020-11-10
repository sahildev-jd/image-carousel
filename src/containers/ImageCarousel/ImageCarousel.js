import React, { useState } from "react";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import Carousel from "../../components/Carousel/Carousel";

const ImageCarousel = (props) => {
  const [images, setImages] = useState([]);
  const onChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((imgs) => imgs.concat(files));
    e.target.value = "";
  };

  return (
    <div>
      <ImageUploader onChange={onChange} />

      <Carousel images={images} />
    </div>
  );
};

export default ImageCarousel;
