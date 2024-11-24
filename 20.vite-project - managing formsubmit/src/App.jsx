import React from 'react';

const App = () => {
  const formFun = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formFun}>
        <input type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
