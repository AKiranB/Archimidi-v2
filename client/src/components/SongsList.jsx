import "../App.css";
import React from 'react';
import { useState, useEffect } from "react";
import service from '../api/service';
import SongCard from "./SongCard";

function SongsList(props) {

  const [allSongs, setAllSongs] = useState([]);
  const { search, } = props;
  const [searchFields, setSearchFields] = useState({ title: true, author: true, tags: false })

  const getAllSongs = async () => {
    const result = await service.findAllSongs();
    setAllSongs(result);
  }

  useEffect(() => {
    getAllSongs()
  }, [])

  let words = search.split(' ') || []

  function searchCheck(search, word) {
    for (let i = 0; i <= word.length; i++) {
      if (word.substring(i, i + search.length).toLowerCase() === search.toLowerCase()) {
        return true
      }
    }
    return false
  }

  const filteredSongs = allSongs.filter(function (song) {
    const title = song.title.split(' ')
    const author = song.author.split(' ')
    const tags = [...song.tags]

    for (let word of words) {
      if (searchFields.title === true) {
        for (let str of title) {
          if (searchCheck(word, str)) {
            return true;
          }
        }
      }
      if (searchFields.author === true) {
        for (let str of author) {
          if (searchCheck(word, str)) {
            return true;
          }
        }
      }
      if (searchFields.tags === true) {
        for (let str of tags) {
          if (searchCheck(word, str)) {
            return true;
          }
        }
      }
      return false;
    }
    return true
  });



  return (<>

    <label>
      Search by title
      <input
        name="title"
        type="checkbox"
        checked={searchFields.title}
        onChange={e => setSearchFields({ ...searchFields, title: e.target.checked })} />
    </label>
    <br />
    <label>
      Search by Author
      <input
        name="author"
        type="checkbox"
        checked={searchFields.author}
        onChange={e => setSearchFields({ ...searchFields, author: e.target.checked })} />
    </label>
    <br />
    <label>
      Search through the tags
      <input
        name="tags"
        type="checkbox"
        checked={searchFields.tags}
        onChange={e => setSearchFields({ ...searchFields, tags: e.target.checked })} />
    </label>
    <br />
    <div className='songsListContainer'>
      {filteredSongs.length > 0 ? filteredSongs.map(song =>
        <SongCard
          className='songCard'
          key={song._id}
          {...song} />) : <p> No songs match your search</p>}
    </div>
  </>
  );
}

export default SongsList;
