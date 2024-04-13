import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/images')
      .then(response => {
        
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images', error);
      });
  }, []);

  return (
    <div className="image-gallery">
      {images.map((base64Image, index) => (
        <img key={index} src={`data:image/jpeg;base64,${base64Image}`} alt="Gallery item" />
      ))}
    </div>
  );
};

export default ImageGallery;
