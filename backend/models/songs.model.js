const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SongsSchema = new Schema({
    user_id: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album_cover: { type: String, required: true },
}, {
    timestamps: true,
})

const Song = mongoose.model('Songs', SongsSchema)

module.exports = Song;