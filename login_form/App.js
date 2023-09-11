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
