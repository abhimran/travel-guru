import React, { useState, useEffect, createContext } from 'react';
import { nameContex} from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initilizeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import RoomHeader from '../RoomHeader/RoomHeader';
import './Login.css'

initilizeLoginFramework();

function Login() {
  const [error, setError] = useState({
    email: '',
    password: ''
  });

  const [newUser, setNewUser] = useState(false);

  const [name, setName, handleClick, loggedInUser, setLoggedInUser, user, setUser] = useContext(nameContex)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = ()=>{
      handleGoogleSignIn()
      .then(res=>{
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }
  const fbSignIn = ()=>{
      handleFbSignIn()
      .then(res=>{
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }
  const handleOnBlur = (e)=> {
    let isFormValid = true;
    if (e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
      let newError = { ...error };
      newError.email = '';
      setError(newError)
    }
    if (e.target.name === 'password') {
      isFormValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e.target.value)
      let newError = { ...error };
      newError.password = "";
      setError(newError);
    }
    if(isFormValid){
      const newUser = {...user}
      newUser[e.target.name] = e.target.value;
      setUser(newUser)
    }else{
      if (e.target.name === 'email'){
        switch (!isFormValid){
          case isFormValid =! /\S/.test(e.target.value):{
            let newError = { ...error }
            newError[e.target.name] = 'Please Include Some Text'
            setError(newError)
            break;
          }
          case isFormValid = ! /\S+@/.test(e.target.value): {
            let newError = { ...error }
            newError[e.target.name] = 'Please Include @ sign'
            setError(newError)
            break;
          }
          case isFormValid = !/\S+@\S/.test(e.target.value):{
            let newError = { ...error }
            newError[e.target.name] = 'Please Include Some Text'
            setError(newError)
            break;
          }
          case isFormValid = !/\S+@\S+\./.test(e.target.value):{
            let newError = { ...error }
            newError[e.target.name] = 'Please Include . Sign'
            setError(newError)
            break;
          }
          case isFormValid = !/\S+@\S+\.\S+/.test(e.target.value):{
            let newError = { ...error }
            newError[e.target.name] = 'Please Include Some Text'
            newError.email= '';
            setError(newError)
            break;
          }
          default:
            let newError = { ...error }
            newError[e.target.name] = 'unknown error! email format: text@gmail.com'
            setError(newError)
        }
      }
      if (e.target.name === 'password') {
        switch (!isFormValid) {
          case (isFormValid = !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(
            e.target.value
          )): {
            let newError = { ...error };
            newError[e.target.name] = "should contain 1 uppercase, 1digit and 8 character!";
            setError(newError);
            break;
          }
          default:
            let newError = { ...error };
            newError[e.target.name] =
              "unknown error! Password format: Aaaaaaa1";
            setError(newError);
        }
      }

    }
  }

  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res=>{
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
      })
  }
  if(!newUser && user.email && user.password){
    signInWithEmailAndPassword(user.email, user.password)
    .then(res=> {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
    })
  }
  e.preventDefault();
}

  return (
   <div>
     <RoomHeader></RoomHeader>
     <div className="login__container">
        <div className="login">

          {
          newUser ? <h3>Sign Up</h3> : <h3>Login</h3>
          }
          {
             newUser && <input type="text" name="name" onChange={handleOnBlur} placeholder="Name"/>
          }
          <input type="email" placeholder="Email" required  name="email" onChange={handleOnBlur}/>
          <p style={{color: 'red'}}>{error.email}</p>
          <p style={{color: 'red'}}>{user.error}</p>
          <input type="password" placeholder="Password" required  name="password" onChange={handleOnBlur}/>
           <p style={{color: 'red'}}>{error.password}</p>
          <div className="btn-container">
            {
              (newUser ? (
                <>
                 <button onClick={handleSubmit}>Sign Up</button>
                 <p>Have An Account? <span onClick={()=>setNewUser(!newUser)}>Sign In</span></p>
                 </>
              ):(
                 <>
                  <button onClick={handleSubmit}>Login</button>
                  <p>Don't Have An Account? <span onClick={()=>setNewUser(!newUser)}>Sign Up</span></p>
                 </>
              ))
            }
          </div>
      </div>
      <div className="social-login">
        <p>or</p>
        <button onClick={googleSignIn}> Sign in with Google</button>
        <button onClick={fbSignIn}> Sign in with Facebook</button>
      </div>
     </div>
   </div>
  );
}

export default Login;