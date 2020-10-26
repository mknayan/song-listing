const router = require('express').Router();
const formidable = require('formidable');
const fs = require('fs');
const Songs = require('../models/songs.model');
const verify = require('./verifytoken')
const { songAddValidationSchema, songEditValidationSchema } = require('../validation');

router.get('/', verify, async (req, res) => {
    try {
        const all_song = await Songs.find({ user_id: req.user._id })
        res.send({ status: 'success', message: "Song list", 'songs': all_song })
    } catch (err) {
        res.status(400).send({ status: 'error', message: "Unable to get data", 'error': err })
    }
})

router.get('/all', async (req, res) => {
    try {
        const all_song = await Songs.find()
        res.send({ status: 'success', message: "Song list", 'songs': all_song })
    } catch (err) {
        res.status(400).send({ status: 'error', message: "Unable to get data", 'error': err })
    }
})

router.post('/add', verify, async (req, res) => {
    // validate
    const { error } = songAddValidationSchema.validate(req.body);
    if (error) {
        let error_data = error.details[0]
        error_data.status = 'error'
        return res.status(400).send(error_data)
    } else {
        const title = req.body.title;
        const artist = req.body.artist;
        const album_cover = req.body.album_cover
        // let album_cover = '/uploads/image.png',

        /*var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = album_cover = '/uploads/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) console.log(err);
                // if (err) throw err;
                // res.write('File uploaded and moved!');
                // res.end();
            });
        });*/

        const save_songs = new Songs({ user_id: req.user._id, title, artist, album_cover })

        try {
            await save_songs.save()
            res.send({ status: 'success', message: "Song successfully created" })
        } catch (err) {
            res.status(400).send({ status: 'error', message: "Unable to save data", 'error': err })
        }
    }
})

router.post('/edit', verify, async (req, res) => {
    // validate
    const { error } = songEditValidationSchema.validate(req.body);
    if (error) {
        let error_data = error.details[0]
        error_data.status = 'error'
        return res.status(400).send(error_data)
    } else {
        const title = req.body.title;
        const artist = req.body.artist;
        const album_cover = req.body.album_cover
        // let album_cover = '/uploads/image.png',

        /*var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = album_cover = '/uploads/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) console.log(err);
                // if (err) throw err;
                // res.write('File uploaded and moved!');
                // res.end();
            });
        });*/

        try {
            await Songs.updateOne({ user_id: req.user._id, _id: req.body.id }, { user_id: req.user._id, title, artist, album_cover })
            res.send({ status: 'success', message: "Song successfully updated" })
        } catch (err) {
            res.status(400).send({ status: 'error', message: "Unable to update data", 'error': err })
        }
    }
})

router.post('/delete', verify, async (req, res) => {
    try {
        await Songs.deleteOne({ user_id: req.user._id, _id: req.body.id })
        res.send({ status: 'success', message: "Song deleted successfully", })
    } catch (err) {
        res.status(400).send({ status: 'error', message: "Unable to deleted data", 'error': err })
    }
})

module.exports = router;