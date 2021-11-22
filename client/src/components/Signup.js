import React from 'react'
import { useState } from 'react';
import service from '../api/service';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


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
                <label htmlFor="username">Username: </label>
                <Input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='Input'
                />
                <label htmlFor="password">Password: </label>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='Input'
                />
                <Button type="submit">Sign Up ✍️</Button>
                {message && (
                    <h3>{message}</h3>
                )}
            </form>
        </div>
    )
}
