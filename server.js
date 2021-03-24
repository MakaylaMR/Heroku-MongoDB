const mongoose = require('./_connection.js')

const dotenv = require('dotenv').config()
const dayjs = require('dayjs')
const express = require('express')
const path = require('path')
const index = require('./routes')
const jeeps = require('./routes/images')


const app = express()
app.set('view engine','ejs')

//serve static assets
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/',index)

//:id
app.use('/images', jeeps)

//custom 404
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname,'pages/error'));
});

// This code was taken from Vitaly. I could not figure out for the life of me how to make this 500 error message to work like the 404 one.
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const errStatus = err.status || 500;
  res.locals.status = errStatus;
  res.status(errStatus);
  res.render('pages/error', {pageTitle: errStatus, errCode: errStatus});
});


//port .env or 3000
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} :)`)
})