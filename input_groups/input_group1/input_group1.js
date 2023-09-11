import React from 'react';
import './input_group1.css'; // Make sure to import your CSS file

const LabelWithInput = ({ id, name, value, onChange }) => {
  return (
    <div className="container">
      <div className="input-group">
        <label >@</label>
        <input
          type="text"
          placeholder="Username"
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          placeholder="Recipient's username"
         />
        <label >@example.com</label>
      </div>

      <h5>Your vanity URL</h5>
      <div className="input-group">
       
        <label > https://example.com/users/ </label>
        <input type="text"/>
      </div>

      <div className="input-group">
        <label>$</label>
        <input
          type="text"
        />
        <label htmlFor={id}>.00</label>
      </div>

      <div className="input-group">
        <label id="txt">With textarea</label>
        <textarea/>
      </div>
    </div>
  );
};

export default LabelWithInput;
