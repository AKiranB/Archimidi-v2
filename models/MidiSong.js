const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// comment

const MidiSong = new Schema(
  {
    title: String,
    author: String,
    songUrl: String,
    createdBy: String,
    genre: String,
    tags: Array,
    likes: { type: Number, default: 0 },
    likedUsers: Array,
  },
  {
    timestamps: true
  }
);

module.exports = model('midiSong', MidiSong);
