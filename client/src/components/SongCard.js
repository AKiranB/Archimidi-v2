import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'

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
                setSong(response.data);
            })
            .catch(err => {
                throw new Error('Cannot update likes:', err);
            });
    };

    return (
        <Card sx={{ width: 400, height: 150, overflow: 'hidden', margin: '16px', display: 'flex', flexDirection: 'column' }}>
            <Link to={`/songs/${_id}`}>
                <CardActionArea sx={{ flex: '1' }}>
                    <CardContent>
                        <Typography color={'black'} variant="h5" component="div">
                            {song.title}
                        </Typography>
                        <Typography color={'black'} variant="h6" component="div">
                            By {song.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {tags && tags.map((tag, i) => <Chip style={{ height: '20px' }} key={i} label={tag} />)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ paddingLeft: 1, paddingRight: 1, paddingTop: 0 }}>
                    <a href={songUrl} download={`${song.title}_${song.author}.mid`}>
                        <Button size="small" color="primary" startIcon={<DownloadIcon />}>
                            Download
                        </Button>
                    </a>
                    <Button size="small" color="primary" onClick={song.likedUsers.includes(currentUserId) ? decrementLike : incrementLike} startIcon={song.likedUsers.includes(currentUserId) ? <FavoriteIcon /> : <FavoriteBorderIcon />}>
                        {song.likes}
                    </Button>
                </CardActions>
            </Link>
        </Card>
    );
}