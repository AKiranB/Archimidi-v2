import { Link } from "react-router-dom";
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';
import { useState } from 'react'





export default function SongCard({
    title,
    _id,
    songUrl,
    author,
    tags,
    likes,
    user,
    likedUsers

}) {

    const [song, setSong] = useState({
        title: title,
        _id: _id,
        songUrl: songUrl,
        author: author,
        tags: tags,
        likes: likes,
        likedUsers: likedUsers
    });

    let currentUserId = (user ? user._id : '');
    const songId = _id;

    const incrementLike = () => {
        axios.put(`/api/like/${songId}`, { currentUserId })
            .then(response => {
                setSong(response.data);
            })
            .catch(err => {
                throw new Error('Cannot update likes:', err);
            });
    };

    const decrementLike = () => {
        axios.put(`/api/unlike/${songId}`, { currentUserId })
            .then(response => {
                setSong(response.data)
            })
            .catch(err => {
                throw new Error('Cannot update likes:', err)
            });
    };

    return (
        <div key={_id} className='songCard'>
            <Link className="Link"
                to={`/songs/${_id}`}
            >
                <div className='cardTop'>
                    <h3>{song.title}</h3>
                    <h4>By {song.author}</h4>
                </div>
            </Link>
            <div className='tagsBox'>
                {tags && tags.map((tag, i) => <p key={i}>{tag}</p>)}
            </div>
            <div className='likeAndDownloadContainer'>
                <a href={songUrl} download={`${song.title}_${song.author}.mid`}><DownloadIcon className='customButton' /></a>
                {(currentUserId !== '' ? (
                    <div>
                        {song.likedUsers.includes(currentUserId) ? (
                            <>
                                <FavoriteIcon
                                    id='heartIcon'
                                    className='customButton'
                                    onClick={() => decrementLike(songId)} />
                                {song.likes}
                            </>

                        ) : (
                            <>
                                <FavoriteBorderIcon
                                    id='heartIcon'
                                    className='customButton'
                                    onClick={() => incrementLike(songId)} />
                                {song.likes}

                            </>
                        )}
                    </div>) : (
                    <>
                        <FavoriteIcon id='heartIcon' className='customButton' />
                        {song.likes}
                    </>

                )
                )}
            </div>
        </div>
    )
}
