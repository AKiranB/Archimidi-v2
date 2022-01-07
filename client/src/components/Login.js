import React from 'react'
import { useState } from 'react'
import service from '../api/service';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Badge } from '@mui/material';
export default function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        service.login(username, password)
            .then(response => {

                if (response.message) {
                    setMessage(response.message)
                    setUsername('')
                    setPassword('')
                } else {
                    props.setUser(response);
                    props.history.push('/')
                }
            })
            .catch(err => {
                console.log(err)
            })

    };
    return (
        <div className='secondaryContainer'>
            <h3>Log in</h3>
            <form onSubmit={handleSubmit} className='baseForm'>

                <TextField
                    required
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='Input'
                    error={message ? true : false}
                    label="Username" variant="outlined"
                    style={{ color: 'grey' }}
                />
                <TextField
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='Input'
                    label="Password" variant="outlined"
                    error={message ? true : false}
                />
                <Button variant='contained' type="submit">Log in</Button>
                {message && (
                    <h3>{message}</h3>
                )}
                <p>Don't have an account? <a href='/signup'>- <u>Sign Up</u></a></p>
            </form>
        </div>
    )
}
