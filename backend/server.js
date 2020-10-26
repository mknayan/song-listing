const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const authRouter = require('./routes/auth');
const userSongsRouter = require('./routes/songs');

app.use('/auth', authRouter)
app.use('/songs', userSongsRouter)

app.listen(port, () => {
    console.log(`Server running ${port}`);
})