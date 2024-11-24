const App = () => {
  let status=false;
  return(
    <div>
    {
      status?
      <button>Logout Button</button>
      :
      <button>Login Button</button>
    }
  </div>
  )
};

export default App;
