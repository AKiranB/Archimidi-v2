import React from 'react'
import { useState } from 'react'
import service from '../api/service'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import SongCard from './SongCard'
import axios from 'axios';



export default function SongDetails(props) {
    const [song, setSong] = useState(null);
    const [midiPlayer, setMidiPlayer] = useState({ body: null });
    let history = useHistory();
    let currentUserId = (props.user ? props.user._id : '');
    const songId = props.match.params.id;



    const deleteSong = (id) => {
        try {
            service.deleteSong(id)
            history.push('/')
        } catch (err) {
            return console.log(err)
        }
    }



    const incrementLike = () => {
        axios.put(`/api/like/${songId}`, { currentUserId })
            .then(response => {

                setSong(response.data)
            })
            .catch(err => {
                throw new Error('cannot update likes')
            });
    };

    const decrementLike = () => {
        axios.put(`/api/unlike/${songId}`, { currentUserId })
            .then(response => {

                setSong(response.data)
            })
            .catch(err => {
                throw new Error('cannot update likes')
            });
    };

    useEffect(() => {
        const retrieveSong = async (id) => {
            try {
                const response = await service
                    .getSong(id)
                setSong(response)
            } catch (err) {
                history.push('/404')
                return console.log(err)
            }
        }
        retrieveSong(songId)
    }, [songId, history])

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.22.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        song && setMidiPlayer({
            body:
                <>
                    <section id="player2">
                        <midi-player
                            src={song.songUrl}
                            visualizer="#player2 midi-visualizer">
                        </midi-player>
                        <midi-visualizer
                            type="piano-roll"
                            src={song.songUrl}>
                        </midi-visualizer>
                    </section>

                </>
        })
    }, [song])

    return (
        <div className='secondaryContainer'>
            {(currentUserId === '' && (
                <Link to='/login'>
                    <div style={{ color: 'red' }}>
                        Log in to download and like this MIDI song
                    </div>
                </Link>
            ))}
            {song && (
                <div className='baseForm'>
                    <SongCard
                        className='songCard'
                        key={song._id}
                        {...song}
                    />
                    <div >
                        {(currentUserId === song.createdBy) &&
                            <button onClick={() => deleteSong(song._id)}>
                                Delete {song.title}
                            </button>}

                        {(currentUserId === song.createdBy) &&
                            <Link to={`/songs/edit/${song._id}`}>
                                <button>
                                    Edit {song.title}
                                </button>
                            </Link>
                        }
                    </div>
                    {(midiPlayer.body !== null) ? <div>{midiPlayer.body}</div> : <p>There's nothing to play</p>}
                    {(currentUserId !== '' && (
                        <div>
                            {song.likedUsers.includes(currentUserId) ? (
                                <button onClick={() => decrementLike(songId)}>
                                    Unlike this song
                                </button>
                            ) : (
                                <button onClick={() => incrementLike(songId)}>
                                    Like this song
                                </button>
                            )}
                        </div>)
                    )}
                </div>)}
        </div>
    )
}