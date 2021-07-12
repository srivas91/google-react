
import './App.css';
import React from 'react';
import Login from './login';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log('login success');
}




function App() {
  return (
    <div className="App">
    <Login />
      <GoogleLogin
    clientId="307463203686-eq15ie0c1pa9psksuuasko4t8lc8e8fl.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
