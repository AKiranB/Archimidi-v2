import React from 'react'
import { useState } from 'react'
import service from '../api/service';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        service.login(username, password)
            .then(response => {
                console.log('handlesubmit service.login response:', response);
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

    }
    return (
        <div className='secondaryContainer'>
            <h3>Log in</h3>
            <form onSubmit={handleSubmit} className='baseForm'>

                <TextField
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className='Input'
                    error={message}
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                    style={{ color: 'grey' }}
                />
                <TextField
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='Input'
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    error={message}
                />
                <Button type="submit">Log in✍️</Button>
                {message && (
                    <h3>{message}</h3>
                )}
            </form>
        </div>
    )
}
