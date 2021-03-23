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
  res.sendFile(path.join(__dirname,'public/404.html'));
});

// general error handling middleware adopted from Vitaly. 
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const errStatus = err.status || 500;
  res.locals.status = errStatus;
  res.status(errStatus);
  // Render the error page using the default layout
  res.render('pages/error', {pageTitle: errStatus, errCode: errStatus});
});

//port .env or 3000
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} :)`)
})