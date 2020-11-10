import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 20px;
`;

const ImageUploader = (props) => {
  const { onChange } = props;

  return (
    <div>
      <StyledInput
        id="file"
        name="file"
        accept="image/*"
        type="file"
        onChange={onChange}
        multiple
      />
    </div>
  );
};

export default ImageUploader;
