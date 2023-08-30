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

// export default App;
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar.js';
import './App.css'; // You can define your main app's CSS styles here

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress increment
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>Progress Bar </h1>
      <ProgressBar value={progress} />
      <p>{progress}% Complete</p>
    </div>
  );
}

export default App;
