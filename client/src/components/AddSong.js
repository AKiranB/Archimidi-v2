import React from 'react';
import { useState, useEffect } from "react";
import service from '../api/service';
import { useHistory } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddSong(props) {
  let history = useHistory();
  const loggedInUser = props.user._id
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [createdBy,] = useState(loggedInUser);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [tagToRemove, setTagToRemove] = useState(null);
  const [uploadStage, setUploadStage] = useState(0);
  const [message, setMessage] = useState(null);

  const handleFileUpload = e => {

    setUploadStage(1)
    const uploadData = new FormData();


    uploadData.append('songUrl', e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then(response => {
        setSongUrl(response.secure_url);
        setUploadStage(2)
      })
      .catch(err => console.log('Error while uploading the file: ', err));
  };


  const handleSubmit = e => {
    e.preventDefault();
    if (title.length > 0) {
      service
        .saveNewSong({ title, author, songUrl, createdBy, tags })
        .then(res => {
          history.push(`/songs/${res._id}`)
        })
        .catch(err => console.log('Error while adding the new song: ', err));
    } else {
      setMessage('enter a title')
    }
  };


  const saveButton = <Button variant='contained' className='bottomMargin' type="submit">Save new song</Button>
  const loadIcon = <p>Loading</p>
  const waitingIcon = <p style={{ fontSize: 15 }}>Waiting for file...</p>


  const HandleTagSubmit = e => {
    e.preventDefault();
    setMessage(null)
    setTags(tags => {
      var set = [tag, ...tags].map(el => {
        return el.toLowerCase()
      }).filter((t, i, arr) => {
        if (t === '') {
          setMessage('cannot add an empty tag')
          return false
        }
        if (arr.indexOf(t) === i) return true
        else {
          setMessage(`${t} is already a tag`)
          return false
        }
      })
      return set
    }
    )
    setTag('')
  }

  useEffect(() => {
    (tagToRemove !== null &&
      setTags([...tags].filter(tagChecked => tagChecked !== tagToRemove))
    )
    return () => {
      setTagToRemove(null)
    }
  }, [tagToRemove, tags])

  const handleDeleteTag = e => {
    e.preventDefault()
    setTagToRemove(e.target.tagButton.value)
  }

  useEffect(() => {
    if (tags.length >= 5) {
      setMessage('max tags number: 5')
    }
  }, [tags])


  return (
    <div className='secondaryContainer'>
      <h2>Add a New MIDI song</h2>
      <form onSubmit={handleSubmit} className='baseForm'>


        <TextField
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          id="outlined-basic" label="Title" variant="outlined"
          placeholder='Title'
          className='Input'
        />

        <TextField
          className='Input'
          type="text" name="author"
          value={author} onChange={e => setAuthor(e.target.value)}
          id="outlined-basic" label="Author" variant="outlined"
          placeholder='Author'
        />
        <div>
          <label className='fileUpload'>
            Choose a file
            <input type="file" onChange={handleFileUpload} />
          </label>
          <div>{uploadStage > 1 ? saveButton : uploadStage > 0 ? loadIcon : waitingIcon}</div>
        </div>

      </form>

      {tags.length < 5 &&

        <form onSubmit={HandleTagSubmit} className='baseForm'>

          <TextField
            type="text"
            name="tag" value={tag}
            placeholder='Add tags'
            onChange={e => setTag(e.target.value)}
          />
          <Button type="submit">Add</Button>

        </form>}


      {message && <p>{message}</p>}
      <div className='tagsBox'>
        {tags.map((tag, index) =>
          <>
            <p>{tag}</p>
            <form onSubmit={handleDeleteTag} >

              <Button
                name='tagButton'
                type="submit"
                value={tag}
              >x
              </Button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}


export default AddSong;
