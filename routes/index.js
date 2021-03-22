const express = require('express')
const router = express.Router()
const api = require('./api/v0')
const dayjs = require('dayjs')
const config = require('../config')
const Image = require('../models/image.js')

// global ejs variabls
router.use((req, res, next) => {
  res.locals = config
  next()
})

// home page
router.get('/', (req, res)=> {
  res.render('pages/index', {pageTitle: 'Home'})
})

// login page
router.get('/login', (req, res)=> {
  res.render('pages/login', {pageTitle: 'login', dayjs: dayjs})
  
})

// register page
router.get('/register', (req, res)=> {
  res.render('pages/register', {pageTitle: 'register', dayjs: dayjs})
})

// single image page
router.get('/:id', (req, res) => {
  
  image = images.find(function(item){
    return req.params.id === item.id
  })

  // if (!id) {
  //   response.sendStatus(404);
  // }

  res.render('pages/single-image', {
    pageTitle: image.description,
    image: image
  });
})

// API
router.use('/api/v0/', api);

module.exports = router