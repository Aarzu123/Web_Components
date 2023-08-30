import React from 'react';

const CloseButton = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      &#x2715; {/* Unicode character for the "x" symbol */}
    </button>
  );
};

export default CloseButton;
