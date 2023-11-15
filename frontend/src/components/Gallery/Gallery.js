import React, { useState } from "react";
import "./Gallery.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import iamge4 from "./iamge4.jpg";
import image5 from "./image5.jpg";

const images = [
  image1, // Import the image using the 'import' statement
  image2,
  image3,
  iamge4,
  image5,
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`thumbnail ${selectedImage === index ? "selected" : ""}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="gallery-display">
        {selectedImage !== null && (
          <img
            src={images[selectedImage]}
            alt={`Image ${selectedImage + 1}`}
            className="selected-image"
          />
        )}
        {selectedImage === null && <p>Select an image to display.</p>}
      </div>
    </div>
  );
}

export default Gallery;
