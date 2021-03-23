const express = require('express')
const router = express.Router()
const config = require('../config')
const jeeps = require('../models/image')

// Global
router.use((req, res, next) => {
  res.locals = config
  next()
})

// Single id
router.get('/:id', (req, res) => {
  jeep = jeeps.find((item) => {
    return req.params.id === item.id
  })

  if (!jeep) {
    res.status(404)
    res.sendFile(__dirname + '../../public/404.html')
  }

  res.render('jeep-item', {
    alt: '',
    jeep: jeep
  });
})

module.exports = router