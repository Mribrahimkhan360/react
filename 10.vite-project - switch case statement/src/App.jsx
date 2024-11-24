const App = () => {
  const status = false; // Corrected variable name
  switch (status) {
    case true: // Corrected typo
      return <button>Logout Btn</button>;
    case false:
      return <button>Login Btn</button>;
    default:
      return null;
  }
};

export default App;
