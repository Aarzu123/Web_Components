import React from 'react';
import MultipleInputFields from './MultipleInputFields.js';
import './MultipleInputFields.css'; // Import your CSS file

function App() {
  return (
    <div>
      <MultipleInputFields
        label="First and last name "
        numberOfFields={2}
        className="multiple-input-container" // Apply the CSS class
      />
    </div>
  );
}

export default App;
