import React from "react";

type Image = {
  images: string[];
};

const ImageList = ({ images }: Image) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      {images.map((item, i) => (
        <div key={i}>
          <img src={item} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
