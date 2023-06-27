import React, { useState } from 'react';

const Carrousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevious = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <button
          onClick={handlePrevious}
          style={{
            alignContent: 'center',
            backgroundColor: '#3ec4fc',
            padding: '10px',
            border: '1px solid grey',
            borderRadius: '20px',
          }}
        >
          Previous
        </button>
      </div>
      <img
        src={images[imageIndex]}
        alt="carrousel images"
        style={{ width: '200px', height: 'auto', borderRadius: '100%' }}
      />

      <div>
        <button
          onClick={handleNext}
          style={{
            alignContent: 'center',
            backgroundColor: '#3ec4fc',
            padding: '10px',
            border: '1px solid grey',
            borderRadius: '20px',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
