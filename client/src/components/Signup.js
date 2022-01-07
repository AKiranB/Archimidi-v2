import React from 'react'
import { useState } from 'react';
import service from '../api/service';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';


export default function Signup(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        service.signup(username, password)
            .then(response => {
                if (response.message) {
                    setUsername('');
                    setPassword('');
                    setMessage(response.message)

                } else {
                    props.setUser(response)
                    props.history.push('/')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='secondaryContainer'>
            <h3>Sign up</h3>
            <form onSubmit={handleSubmit} className='baseForm'>
                <TextField
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='Input'
                    error={message ? true : false}
                    label="Username" variant="outlined"

                />
                <TextField
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='Input'
                    error={message ? true : false}
                    label="Password" variant="outlined"

                />

                <Button variant='contained' type="submit">Create Account </Button>

                {message && (
                    <h3>{message}</h3>
                )}
                <p>Already a user? <a href='/login'>- <u>Log In</u></a></p>
            </form>
        </div>
    )
}
