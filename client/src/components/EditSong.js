import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import service from '../api/service'

export default function EditSong(props) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const songId = props.match.params.id;

    useEffect(() => {
        const retrieveSong = async (id) => {
            const response = await service.getSong(id);
            setTitle(response.title)
            setAuthor(response.author)
        }
        retrieveSong(songId)
    }, [songId])

    const handleSubmit = e => {
        e.preventDefault();
        const requestBody = { title, author };
        axios.put(`/api/${songId}`, requestBody)
            .then(() => {
                props.history.push(`/songs/${songId}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='secondaryContainer'>
            <h3>Edit song</h3>
            <form onSubmit={handleSubmit} className='baseForm'>
                <label htmlFor="title">
                    Title:
                </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="author">Author: </label>
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
                <button type="submit">Update this project</button>
            </form>

        </div>
    )
}
