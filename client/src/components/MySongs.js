import React from 'react';
import service from '../api/service';
import SongCard from "./SongCard";
import { useState, useEffect } from "react";

export default function MySongs(props) {

    const userId = props.user._id || ''

    const [allSongs, setAllSongs] = useState([]);

    const getMySongs = async () => {
        const result = await service.findAllSongs();
        setAllSongs(result);
    };

    useEffect(() => {
        getMySongs()
    }, [])

    const filteredSongs = allSongs.filter(song => {
        return song.createdBy === userId
    });

    return (
        <div>
            {userId !== undefined ?
                (<>

                    <div className='songsListContainer'>
                        {filteredSongs.length >= 1 ? (
                            <>
                                {filteredSongs.map(song => <SongCard key={song._id} {...song} />)}
                            </>
                        ) : (
                            <>
                                <h1>You haven't uploaded any songs yet</h1>
                            </>
                        )}
                    </div>
                </>
                ) : (null)}
        </div>
    )
}