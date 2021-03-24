const express = require('express')
const router = express.Router()
const api = require('./api/v0')
const dayjs = require('dayjs')
const config = require('../config')
const Jeep = require('../models/image.js')
 
// global ejs variabls
router.use((req, res, next) => {
  res.locals = config
  next()
})

// Home
router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: 'Home'})
})

// Login
router.get('/login', (req, res) => {
  res.render('pages/login', {pageTitle: 'Login', dayjs: dayjs})
})

// Register
router.get('/register', (req, res) => {
  res.render('pages/register', {pageTitle: 'Register', dayjs: dayjs})
})

router.use('/api/v0/', api);

module.exports = router