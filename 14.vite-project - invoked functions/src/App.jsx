const App = () => {
  let status=true;
  return(
    <div>
      {(()=>{
        if(status==true){
          return <button>Hello true</button>
        }
        else{
          return <button>Flse Button</button>
        }
      } )()}
    </div>
  )
};

export default App;
