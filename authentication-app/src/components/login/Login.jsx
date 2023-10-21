import React, { useState } from 'react';
import axios from 'axios';

import '../login/Login.css';
// import ForgotPass from '../passrecovery/ForgotPass';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const client = axios.create({
    baseURL: "http://localhost:5247/api/user" 
  });

export default function Login()
{


    const [login, setLogin] = useState({});

    const handleClick = () =>
    {
        client.post("/login").then(data => {

        })
        .catch(err =>
            {
                console.log(err);
            })
    }

        return (
        <div className='login'>
            <h3>Login</h3>
            <input type='text' name='username-email' placeholder='Username or email address' value={login.name} />
            <input type='text' name='password' placeholder='Password' value={login.password} />
            <button type='submit' onClick={handleClick}>Login</button>
            <p><Link to="passrecovery">Forgot password?</Link></p>
            <p><Link to="signup">Sign up account | it's free </Link></p>
        </div>
    );
  
}