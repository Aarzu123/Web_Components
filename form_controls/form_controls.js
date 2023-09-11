import React, { useState } from 'react';
import './form_controls.css'; // Import your CSS file

const FileUpload= () => {
  const [setSelectedFiles] = useState([]);
  
  // Function to handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  return (
    <div className="file-upload-container">
      <div className="column">
        <label htmlFor="fileInput">Default file input example</label>
        <input
          type="file"
          id="fileInput"
          accept=".jpg, .jpeg, .png, .pdf"
          
          onChange={handleFileChange}
        />
      </div>
      
        <div className="column">
        <label htmlFor="fileInput">Multiple file input example</label>
        <input
          type="file"
          id="fileInput"
          accept=".jpg, .jpeg, .png, .pdf"
          multiple
          onChange={handleFileChange}
        />
      </div>
     
        <div className="column">
        <label htmlFor="fileInput">Disabled file input example</label>
        <input
          type="file"
          id="fileInput"
          accept=".jpg, .jpeg, .png, .pdf"
          multiple
          onChange={handleFileChange}
        />
      </div>
      
        <div className="column">
        <label htmlFor="fileInput">Small file input example</label>
        <input
          type="file"
          id="fileInput"
          accept=".jpg, .jpeg, .png, .pdf"
          multiple
          onChange={handleFileChange}
        />
      </div>
      
        <div className="column">
        <label htmlFor="fileInput">Large file input example</label>
        <input
          type="file"
          id="fileInput"
          accept=".jpg, .jpeg, .png, .pdf"
          multiple
          onChange={handleFileChange}
        />
      </div>
      
      </div>
    
  );
};

export default FileUpload;
