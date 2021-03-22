const mongoose = require('./_connection.js')

const dotenv = require('dotenv').config()
const express = require('express')
const api = require('./routes/images')
const path = require('path')

const model = require('./models/image')

const app = express()

app.set('view engine','ejs')

//serve static assets
app.use(express.static(path.join(__dirname, 'public')))

// //routes
// app.use('/',image)

//custom 404
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname,'public/404.html'));
});

//port .env or 3000
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})