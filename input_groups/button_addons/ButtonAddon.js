// import React, { useState } from 'react';

// const ButtonWithInput = ({ buttonText, onButtonClick }) => {
//   const [inputValue, setInputValue] = useState('');
 
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
   
//   };
  

//   const handleButtonClick = () => {
//     onButtonClick(inputValue);
//   };


//   return (
//     <div className='container'> 
//       <button onClick={handleButtonClick}>{buttonText}</button>
//       <input id="input1"
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Recipient's username" />
      
      
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Recipient's username" />
//       <button onClick={handleButtonClick}>{buttonText}</button>
     

//       <button onClick={handleButtonClick}>{buttonText}</button>
//       <button onClick={handleButtonClick}>{buttonText}</button>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Recipient's username" />
      
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Recipient's username" />
//       <button onClick={handleButtonClick}>{buttonText}</button>
//       <button onClick={handleButtonClick}>{buttonText}</button>
//     </div>

//   );
//   };
  
// export default ButtonWithInput;
import React  from 'react';

const ButtonWithInput = ({ buttonText, onButtonClick }) => {

  return (
    <div className="container">
      <div className="group">
        <button >{buttonText}</button>
        <input 
          type="text"
          className="custom-input"
        />
      </div>

      <div className="group">
        <input
          type="text"
           className="custom-input"
          placeholder="Recipient's username"
        />
        <button >{buttonText}</button>
        
      </div>

      <div className="group">
      <button >{buttonText}</button>
      <button >{buttonText}</button>
        <input
          type="text"
        />
        </div>
        <div className="group">
        <input
          type="text"
         
          
          placeholder="Recipient's username"
        />
        <button >{buttonText}</button>
        <button >{buttonText}</button>
      </div>
    </div>
  );
};

export default ButtonWithInput;
