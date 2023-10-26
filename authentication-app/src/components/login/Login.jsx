import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../login/Login.css';

const client = axios.create({
    baseURL: "http://localhost:8080/api/auth/signin"
});

export default function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        client.post("", login)
            .then(response => {
                console.log(response.data);
                // You can handle the response data here
            })
            .catch(error => {
                console.log(error);
                // Handle errors here
            });
    }

    return (
        <div className='login'>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='Username or email address'
                    value={login.username}
                    onChange={handleInputChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={login.password}
                    onChange={handleInputChange}
                />
                <button type='submit'>Login</button>
            </form>
            <p><Link to="passrecovery">Forgot password?</Link></p>
            <p><Link to="signup">Sign up account | it's free</Link></p>
        </div>
 );
}