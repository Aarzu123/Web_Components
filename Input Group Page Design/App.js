import './App.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your preferred code highlighting style

 

function App() {

  const sampleCode = `/ * input_group.js  */

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


`;

 

  const samp = `import './App.js';
  import React from 'react';
import LabelWithInput from './input_group1.js';

function App() {
  
  return (
    <div>
      <LabelWithInput/>
    </div>
  );
}

export default App;



`;

 

  const css = `/* input_group1.css */

  .container {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: rgb(56, 53, 53);
    width: 50%;
    gap: 8px; /* Add spacing between input groups */
  }
  
  .input-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* Add spacing between labels and inputs within a group */
  }
  
  label {
     /* Adjust the label width as needed */
    text-align: right; /* Align label text to the right */
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    color: aliceblue;
  }
  
  input,
  textarea {
    flex: 1; /* Allow inputs to expand and take available space */
    padding: 11px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    background-color: #131010;
    color: white; 

  }
  ::placeholder {
    color: rgb(218, 213, 213); /* Set the placeholder text color to white */
  }
  h5{
    color:#fff;
  }
 #txt
 {
    height: 35px;;
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

      <h1 className='slide'>Input Group</h1>

      <p>An "input group" is a user interface (UI) design pattern often used in web and mobile applications to group related form input elements together for better organization and presentation. Input groups are commonly used when you have multiple form fields that are related to each other or need to be presented in a visually cohesive manner</p>

      <div className="code-container">

        <h2 className='slide'>input_group1.js</h2>

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="javascript" style={xonokai} className='sample'>

          {sampleCode}

        </SyntaxHighlighter>

 

        <h2 className='slide'>App.js</h2>

       

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="javascript" style={xonokai} className='sample'>

          {samp}

        </SyntaxHighlighter>

 

        <h2 className='slide'>input_group1.css</h2>

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="css" style={xonokai} className='sample'>

          {css}

        </SyntaxHighlighter>

      </div>

      <div>

        <h1 className='slide'>Result</h1>

        <img src='input_group1.png' alt='' className='res' />

      </div>

    </div>

  );

}

export default App;