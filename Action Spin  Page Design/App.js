import './App.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your preferred code highlighting style

 

function App() {

  const sampleCode = `/* Spinner.js */

import React from 'react';
import './spinner.css';

const Spinner = () => {
  return <div className="spinner"></div>;
};
export default Spinner;

`;

const samp = `/*App.js*/

import React from 'react';
import Spinner from './spinner';

const App = () => {
  return (
    <div>
      <h1>Loading...</h1>
      
      <Spinner size="medium"
        color="#007bff"
        className="custom-spinner"
      />

    </div>
  );
};

export default App;

`;

 const css = `/*Spinner.css*/

 .spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;

 

  const handleCopyClick = () => {

    // Create a textarea element to hold the code

    const textarea = document.createElement('textarea');

    textarea.value = sampleCode;

 

    // Append the textarea to the document

    document.body.appendChild(textarea);

 

    // Select the text within the textarea

    textarea.select();

 

    // Copy the selected text to the clipboard

    document.execCommand('copy');

 

    // Remove the textarea from the document

    document.body.removeChild(textarea);

 

    // Provide some feedback to the user (e.g., a tooltip or a message)

    alert('Code has been copied to the clipboard!');

  };

 

  return (

    <div className="App">

      <h1 className='slide'> Spinner </h1>

      <p>The Reusable Spinner React Component is a versatile and customizable component that can be integrated into your React applications to provide visual feedback during loading or processing tasks.
      This component enhances user experience by offering a standardized and adaptable spinner that can be utilized across various parts of your application.
      </p>

      <div className="code-container">

        <h2 className='slide'>Spinner.js</h2>

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="javascript" style={xonokai} className='sample'>

          {sampleCode}

        </SyntaxHighlighter>

 

        <h2 className='slide'>App.js</h2>

        

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="javascript" style={xonokai} className='sample'>

          {samp}

        </SyntaxHighlighter>

 

        <h2 className='slide'>Spinner.css</h2>

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="css" style={xonokai} className='sample'>

          {css}

        </SyntaxHighlighter>

      </div>

      <div>

        <h1 className='slide'>Result</h1>

        <img src="Spinner.png" alt="Spinner" />


      </div>

    </div>

  );

}

 

export default App;