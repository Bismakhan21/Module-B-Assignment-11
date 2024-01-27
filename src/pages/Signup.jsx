import React from 'react'
import { Link } from 'react-router-dom';
// import { Login } from './Login';
import { useState } from 'react';
// import Home from './Home';
import { Input } from '../Components/Input';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

function Signup() {
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
    <>
    <div className='container2'>
   
    <h2 className='heading'>Sign Up</h2>

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
    <br />
    
    <button className='btn' type="submit"><Link to={'/'}>Sign up</Link> </button>
      <br />
    <Link to={'/login'}>Already have an account Sign in..</Link>
</form>
  </div>
      
    </>
  )
}

export { Signup }
