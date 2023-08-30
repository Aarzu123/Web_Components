import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css'; // You can define your CSS styles for the progress bar here

const ProgressBar = ({ value }) => {
  const progressBarStyle = {
    width: `${value}%`,
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={progressBarStyle}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired, // Value should be a number between 0 and 100
};

export default ProgressBar;
