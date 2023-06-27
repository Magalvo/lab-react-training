import React from 'react';
import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      onClick={handleClick}
      src={isClicked ? imgClicked : img}
      alt="profilePic"
      style={{ cursor: 'pointer' }}
    ></img>
  );
};

export default ClickablePicture;
