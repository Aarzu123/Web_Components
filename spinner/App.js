// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
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
