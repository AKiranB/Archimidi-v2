import axios from 'axios';


const service = axios.create({
  baseURL: '/api'
});

const errorHandler = err => {
  throw err;
};

const findAllSongs = () => {
  return service
    .get('/songs')
    .then(res => res.data)
    .catch(err => {
      errorHandler('error retrieving all songs', err)
    })
}

const getSong = (songId) => {
  return service
    .get(`/songs/${songId}`)
    .then(res => res.data)
    .catch(err => {
      errorHandler('error retrieving song:', err)
    })
}

const handleUpload = file => {
  return service
    .post('/upload', file)
    .then(res => res.data)
    .catch(err => {
      errorHandler('error uploading file:', err)
    });
};

const saveNewSong = newSong => {
  return service
    .post('/songs/create', newSong)
    .then(res => res.data)
    .catch(err => {
      errorHandler('error saving new song', err)
    });
};

const deleteSong = (songId) => {
  return service
    .delete(`/${songId}`)
    .then(res => res.data)
    .catch(err => {
      errorHandler('error deleting song:', err)
    })
}

const signup = (username, password) => {
  return service.post('/auth/signup', { username, password })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data
    })
}

const login = (username, password) => {

  return service.post('/auth/login', { username, password })
    .then(response => {

      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}

const logout = () => {
  return service.delete('/auth/logout')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    })
}


const data = {
  service,
  handleUpload,
  saveNewSong,
  findAllSongs,
  getSong,
  signup,
  login,
  logout,
  errorHandler,
  deleteSong
};



export default data;
