import "../App.css";
import React from 'react';
import { useState, useEffect } from "react";
import service from '../api/service';
import SongCard from "./SongCard";
import { Checkbox } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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


  const searchCheckBoxes = (<div className='searchTickBoxesContainer'>

    <label>
      Title
      <Checkbox
        name="title"
        type="checkbox"
        checked={searchFields.title}
        onChange={e => setSearchFields({ ...searchFields, title: e.target.checked })} />
    </label>
    <br />
    <label>
      Author
      <Checkbox
        name="author"
        type="checkbox"
        checked={searchFields.author}
        onChange={e => setSearchFields({ ...searchFields, author: e.target.checked })} />
    </label>
    <br />
    <label>
      Tags
      <Checkbox
        name="tags"
        type="checkbox"
        checked={searchFields.tags}
        onChange={e => setSearchFields({ ...searchFields, tags: e.target.checked })} />
    </label>
    <br />
  </div>)

  return (<>
    <div className='accordionContainer'>
      <Accordion color='black'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Search by</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            {searchCheckBoxes}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>


    <div className='songsListContainer'>
      {filteredSongs.length > 0 ? filteredSongs.map(song =>
        <SongCard
          className='songCard'
          key={song._id}
          user={props.user}
          {...song} />) : <p> No songs match your search</p>}
    </div>
  </>
  );
}

export default SongsList;
