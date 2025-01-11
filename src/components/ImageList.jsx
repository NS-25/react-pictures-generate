import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return (
    <div>
      <h1>{renderedImages}</h1>
    </div>
  );
};

export default ImageList;
