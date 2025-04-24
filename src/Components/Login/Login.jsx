import React, { useRef, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate= useNavigate();
  const [tryLogin, setTryLogin] = useState(false);
  const button= useRef(null)
  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', '[]');
    }
  }, []);
  function Access(){
    if (button.current.innerText=="Signup"){
        localStorage.setItem('CurrUser',[]);
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }
        let users = JSON.parse(localStorage.getItem('users'));
        for (let i of users) {
          if (i.username==user.username && i.password==user.password){
            alert("User already exists");
            return;
          }
        
        }
        localStorage.setItem('CurrUser', JSON.stringify(user));
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/navigator');

    }
    else{
        let users = JSON.parse(localStorage.getItem('users'));
        let user = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
        let found = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === user.username && users[i].password === user.password) {
                found = true;
                break;
            }
        }
        if (found) {
            localStorage.setItem('CurrUser', JSON.stringify(user));
            navigate('/navigator');
        } else {
            alert("Invalid username or password");
        }
    }
  }
  const handleLogin = () => {
    setTryLogin(!tryLogin);
    
  };

  return (
    <div className="login">
      <div className="login-card">
        <h1>{tryLogin? "Login":"Signup"}</h1>
        <div className="input-container">
          <label>Username</label>
          <input type="text" id="username" placeholder="Enter your username"/>
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button onClick={Access} ref={button} type="submit">{tryLogin? "Login":"Signup"}</button>
        <div className="login-link">
          <p style={{ color: 'black' }}>
            {tryLogin ? 'Already have an account?'  : 'Create an account?'}
            <a  style={{cursor:'pointer'}} onClick={handleLogin}>{tryLogin? "SignUp":"Login"}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;