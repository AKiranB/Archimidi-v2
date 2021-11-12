import React from 'react'
import { useState } from 'react'
import service from '../api/service'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import SongCard from './SongCard'

export default function SongDetails(props) {
    let history = useHistory()
    // console.log(history)
    const [song, setSong] = useState(null)
    const [midiPlayer, setMidiPlayer] = useState({ body: null })

    let currentUserId = (props.user ? props.user._id : '');
    const songId = props.match.params.id

    const deleteSong = (id) => {
        try {
            //// i made it work but i'm not sure I get it. response is not the right word.////
            const response = service
                .deleteSong(id)
                .then
            console.log('song deleted:', response)
            history.push('/')
        } catch (err) {
            return console.log(err)
        }

    }

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

    useEffect(() => {
        retrieveSong(songId)
    }, [songId])

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
            {song && (
                <div className='baseForm'>
                    <SongCard className='songCard' key={song._id} {...song} />

                    <div >
                        {(currentUserId === song.createdBy) && <button onClick={() => deleteSong(song._id)}>Delete {song.title}</button>}

                        {(currentUserId === song.createdBy) && <Link to={`/songs/edit/${song._id}`}><button>Edit {song.title}</button></Link>}
                    </div>
                    {(midiPlayer.body !== null) ? <div>{midiPlayer.body}</div> : <p>nothing to play</p>}
                </div>)}
        </div>
    )
}