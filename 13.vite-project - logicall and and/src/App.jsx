const App = () => {
  let status=true;
  const statusLogin =true;
  return(
    <div>
    <h1>{status && <span>Login Status</span>}</h1>
    <p>{status && <button>Logout Button</button>}</p> 
    <p>{statusLogin && <button>status Login</button>}</p>
  </div>
  )
};

export default App;
