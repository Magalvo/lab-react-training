import React from 'react';
import { useState } from 'react';

const LikeButton = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  const buttonStyle = {
    backgroundColor: colors[colorIndex],
    borderRadius: '5px',
    padding: '30px',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '30px',
  };

  return (
    <button style={buttonStyle} onClick={handleLike}>
      {likes} Likes
    </button>
  );
};

export default LikeButton;
