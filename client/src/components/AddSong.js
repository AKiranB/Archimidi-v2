import React from 'react';
import { useState, useEffect } from "react";
import service from '../api/service';
import { useHistory } from 'react-router';

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


  const saveButton = <button className='bottomMargin' type="submit">Save new song</button>
  const loadIcon = <p>Loading</p>
  const waitingIcon = <p>Waiting for a file...</p>


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
      <h2>New Song</h2>
      <form onSubmit={handleSubmit} className='baseForm'>

        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Title'
        />

        <input
          className='bottomMargin'
          type="text" name="author"
          value={author} onChange={e => setAuthor(e.target.value)}
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

          <input
            type="text"
            name="tag" value={tag}
            placeholder='Add tags'
            onChange={e => setTag(e.target.value)}
          />
          <button type="submit">Add</button>

        </form>}


      {message && <p>{message}</p>}
      <div className='tagsBox'>
        {tags.map((tag, index) =>
          <>
            <p>{tag}</p>
            <form onSubmit={handleDeleteTag} >

              <button
                name='tagButton'
                type="submit"
                value={tag}
              >x
              </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}


export default AddSong;
