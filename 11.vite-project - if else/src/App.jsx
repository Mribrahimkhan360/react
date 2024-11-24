const LoginStatus=(status)=>{
  if(status){
    return <button>LogOut Btn</button>
  }
  else{
    return <button>Login btn</button>
  }
} 


const App = () => {
  return(
    <div>
    <h1>Login Status</h1>
    {LoginStatus(true)}
  </div>
  )
// const status = true;
//   if(status==true){
//     return (
//       <div>
//         <div>Login Status</div>
//         <button>Logout</button>
//       </div>
//     );
//   }
//   else{
//     return(
//       <div>
//         <div>Login Status</div>
//         <button>Logout</button>
//       </div>
//     )
//   }
};

export default App;
