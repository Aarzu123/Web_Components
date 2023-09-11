import React from 'react';
import './App.css';
import './form_controls.js' // Adjust the path to your component file
import FileUpload from './form_controls.js';

function App() {
  return (
    <div className="App">
     
      <main className="App-main">
        <FileUpload />
      </main>
    </div>
  );
}

export default App;
