import './App.css';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose your preferred code highlighting style

 

function App() {

  const sampleCode = `/* LoginForm.js */
  
  import React, { useState } from 'react';
  import './LoginForm.css';
  
  const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
  
    const validateForm = () => {
      const newErrors = { email: '', password: '' };
      let isValid = true;
  
      if (!email) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Invalid email format';
        isValid = false;
      }
  
      if (!password) {
        newErrors.password = 'Password is required';
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        onSubmit({ email, password });
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div  className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div  className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        
      </form>
    );
  };
  
  export default LoginForm;
  
`;

 

  const samp = `/*App.js*/

  import React from 'react';
  import LoginForm from './LoginForm'; // Update with the actual path
  
  const App = () => {
    const handleLoginFormSubmit = (formData) => {
      // Handle form submission logic here
      console.log('Form data submitted:', formData);
    };
  
    return (
      <div>
        <LoginForm onSubmit={handleLoginFormSubmit} />
      </div>
    );
  };
  
  export default App;
  
`;

 

  const css = `/*LoginForm.css*/

  *
  {
    background-color:rgb(29, 28, 28);
     margin-top: 10px;
  }
  
  label
  {
    color: #fff;
  }
  
  .form-group {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    text-decoration-color: aliceblue;
    justify-content: space-between;
  }
  
  input {
    
    padding: 10px;
    width: 30%; /* Make the input take up the full width of its container */
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 16px;
    margin-right: 60%;
    color: #fff;
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

      <h1 className='slide'>Login Form </h1>

      <p>The login form React component serves the primary purpose of capturing and validating user login information. It is often a crucial element in applications that require user accounts and restricted access. This component is responsible for gathering user data and transmitting it securely to the server for authentication.</p>

      <div className="code-container">

        <h2 className='slide'>LoginForm.js</h2>

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="javascript" style={xonokai} className='sample'>

          {sampleCode}

        </SyntaxHighlighter>

 

        <h2 className='slide'>App.js</h2>

        

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="javascript" style={xonokai} className='sample'>

          {samp}

        </SyntaxHighlighter>

 

        <h2 className='slide'>LoginForm.css</h2>

        <button onClick={handleCopyClick} className='btn'>Copy Code</button>

        <SyntaxHighlighter language="css" style={xonokai} className='sample'>

          {css}

        </SyntaxHighlighter>

      </div>

      <div>

        <h1 className='slide'>Result</h1>

        <img src="LoginForm.png" alt="LoginForm" />


      </div>

    </div>

  );

}

 

export default App;