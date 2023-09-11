// MultipleInputFields.js
import React, { useState } from 'react';
import './MultipleInputFields.css'
const MultipleInputFields = ({ label, numberOfFields }) => {
  const [inputValues, setInputValues] = useState(Array(numberOfFields).fill(''));

  const handleInputChange = (e, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  return (
    <div className="multiple-input-container">
      <label>{label}</label>
      {inputValues.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
    </div>
    
  );
};

export default MultipleInputFields;
