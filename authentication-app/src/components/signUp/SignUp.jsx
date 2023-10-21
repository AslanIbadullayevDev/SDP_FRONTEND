import './SignUp.css';
import React, { useState } from 'react';
import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

const client = axios.create({
    baseURL: "http://localhost:5247/api/user" 
  });

export default function SignUp()
{
    const [formData, setFormData] = useState(
        {
            username:'',
            emailAddress:'', 
            newPass:'', 
            newConfPass:''
        });

    function handleChange(e) 
    {
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        client.post('/createuser', JSON.stringify(
        {//
            username: formData.username,
            emailAddress: formData.emailAddress, 
            newPass: formData.newPass, 
            newConfPass: formData.newConfPass
        })
        )
        .then(res => res.JSON())
        .then(data => {
        if(data.status === 201)
        {
            // TO DO something
        }
        }
        )
        .catch(function (error) {
            // TO DO something
        });
    }
        
        return (
        <div className='container'>
            <h1>Sign Up!</h1>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' name='username' value={formData.username} onChange={(e) => handleChange(e)} required/>
            <input type='email' placeholder='email address' name='emailAddress' value={formData.emailAddress} onChange={(e) => handleChange(e)} required/>
            <input type='text' placeholder='new password' name='newPass' value={formData.newPass} onChange={(e) => handleChange(e)} required/>
            <input type='text' placeholder='confirm the new password' name='newConfPass' value={formData.newConfPass} onChange={(e) => handleChange(e)} required/>
            <button type='submit'>Create New Account</button>
        </form>
        </div>
        )
}