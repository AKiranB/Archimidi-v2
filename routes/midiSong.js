const express = require('express');
const router = express.Router();
const MidiSong = require('../models/MidiSong');
const fileUploader = require('../config/cloudinary.config');
const e = require('express');


router.get('/songs', (req, res, next) => {
  MidiSong.find()
    .then(songsFromDB => res.status(200).json(songsFromDB))
    .catch(err => next(err));
});


router.get('/songs/:id', (req, res, next) => {
  MidiSong.findById(req.params.id)
    .then(song => {

      if (!song) {
        res.status(404).json(song)

      } else {
        res.status(200).json(song)
      }
    })
    .catch(err => next(err))
});


router.post('/upload', fileUploader.single('songUrl'), (req, res, next) => {
  console.log('file is: ', req.file)

  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  res.json({ secure_url: req.file.path });
});


router.post('/songs/create', (req, res, next) => {
  console.log('body: ', req.body);

  MidiSong.create(req.body)
    .then(newlyCreatedSongFromDB => {
      res.status(200).json(newlyCreatedSongFromDB);
    })
    .catch(err => next(err));
});


router.put('/:id', (req, res, next) => {
  const { title, author } = req.body;

  MidiSong.findByIdAndUpdate(req.params.id, { title: title, author: author })
    .then(updatedSong => {
      res.status(200).json(updatedSong)
    })
    .catch(err => next(err))
});


router.delete('/:id', (req, res) => {
  MidiSong.findByIdAndDelete(req.params.id)
    .then(() => {
      fileUploader.destroy(`${req.params.id}`, function (error, result) {
        console.log(result, error)
      });
      res.status(200).json({ message: 'song deleted' });
    })
    .catch(err => console.log(err));
});


router.put('/like/:id', (req, res, next) => {
  const currentUserId = req.body.currentUserId
  MidiSong.findByIdAndUpdate(req.params.id,
    {
      $addToSet: {
        likedUsers: currentUserId
      },
      $inc: {
        "likes": 1
      }
    },
    { new: true })
    .then(updatedSong => {
      res.send(updatedSong)
    })
    .catch(err => next(err))
});

router.put('/unlike/:id', (req, res, next) => {
  const currentUserId = req.body.currentUserId
  MidiSong.findByIdAndUpdate(req.params.id,
    {
      $pull: {
        likedUsers: currentUserId
      },
      $inc: {
        "likes": -1
      }
    },
    { new: true })
    .then(updatedSong => {
      res.send(updatedSong)
    })
    .catch(err => next(err))
});

module.exports = router;
