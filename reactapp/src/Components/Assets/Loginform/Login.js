import React, { useState } from 'react'
import{Link,useNavigate}from 'react-router-dom';
import { login } from './userSlice';
import { useDispatch } from 'react-redux';
import "./Login.css";

export default function Login() 
{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const dispatch =useDispatch();
    const authenticate=(e)=>
    {
      e.preventDefault();
     
      if(username.length==0 && password.length==0)
      {
        alert("Enter emailid and password")
      }
      else if(username.length===0)
      {
        alert("Enter Emailid")
      }
      else if(password.length===0)
      {
        alert("Enter Password");
      }
      else if (username && password) 
      {
        dispatch(login(username));
        navigate("/");
      }
         
    }
    
  return(

    <div className="containerlogin">
    <form >
    <div className="form5">
      <img src="https://i.pinimg.com/236x/4d/a8/bb/4da8bb993057c69a85b9b6f2775c9df2.jpg" alt="profile" />
      <small>Need an Account? <Link to="/signup" className='aa'>  Register</Link></small><br></br><br></br>
     
      <input type="text" value={username} autoComplete placeholder="UserName" onChange={(e)=>setUsername(e.target.value)} /><br></br>
      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
     
      <button type="submit" class="button5" onClick={authenticate}>LOGIN</button>
      
      </div>
      </form>
      </div>

);
  }