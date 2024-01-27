import React from 'react'
import { Link } from 'react-router-dom'
// import Home from './Home';
// import {Signup} from './Signup';
import { useState } from 'react';
import { Input } from '../Components/Input';
import { useNavigate } from "react-router-dom";
import './LoginSignup.css';

function Login() {
    
    const [user_data, setUserData] = useState({});

    const navigate = useNavigate();
  
    const onChangeHandle = (e) => {
      const value = e.target.value;
      const id = e.target.id;
     
      setUserData({ ...user_data, [id]: value });
          
    };
  
    const submit_handle = (e) => {
      e.prevantDefault()
  
      console.log("data", user_data);
      navigate("/");
    };

  return (
    <div className="container">
        <h2 className='heading'>Login</h2>

        <form 
        onSubmit={submit_handle}
        >
     <label>Email address</label>
     <Input 
            placeholder={"Email address"}
            type={"email"}
            id={"email"}
            required={true}
            onChange={onChangeHandle}
          />
    <br />
    <br />
    <label>Your password</label>
    
    <Input
            required={true}
            placeholder={"Password"}
            type={"password"}
            id={"password"}
            onChange={onChangeHandle}
          />
   
     <br />
     
     <button className='btn' type="submit"><Link to={'/'}>Login</Link></button>

    <Link to={'/signup'}>Create account..</Link>

    
    </form>
   
    </div>
  );
};

export { Login }