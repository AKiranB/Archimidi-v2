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
  const [sortedSongs, setSortedSongs] = useState([])
  const { search, } = props;
  const [searchFields, setSearchFields] = useState({ title: true, author: true, tags: false })
  const [sortFields, setSort] = useState({ alphabetic: false, likes: false })

  const getAllSongs = async () => {
    const result = await service.findAllSongs();
    setAllSongs(result);
  }

  useEffect(() => {
    getAllSongs()
  }, [])

  let words = search.split(' ') || []

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  useEffect(() => {
    function sort(array) {
      const sortedArray = [...array]
      let songs
      if (!sortFields.alphabetic && !sortFields.likes) {
        return setSortedSongs(array)
      }
      if (sortFields.alphabetic) {
        songs = sortedArray.sort(dynamicSort('title'))
        return setSortedSongs(songs)
      } else if (sortFields.likes) {
        songs = sortedArray.sort(dynamicSort('-likes'))
        return setSortedSongs(songs)
      } else {
        songs = sortedArray.sort
      }
      return setSortedSongs(array)
    }
    sort(allSongs)
  }, [sortFields, allSongs])



  function searchCheck(search, word) {
    for (let i = 0; i <= word.length; i++) {
      if (word.substring(i, i + search.length).toLowerCase() === search.toLowerCase()) {
        return true
      }
    }
    return false
  }

  const filteredSongs = sortedSongs.filter(function (song) {
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
        name=""
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

  const sortCheckBoxes = (<div className='sortTickBoxesContainer'>
    <label>
      A-Z
      <Checkbox
        name="A-Z"
        type="checkbox"
        checked={sortFields.alphabetic}
        onChange={e => setSort({ ...sortFields, alphabetic: e.target.checked })} />
    </label>
    <br />
    <label>
      Most favourited
      <Checkbox
        name="likes"
        type="checkbox"
        checked={sortFields.likes}
        onChange={e => setSort({ ...sortFields, likes: e.target.checked })} />
    </label>

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




      <Accordion color='black'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sort by</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            {sortCheckBoxes}
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
