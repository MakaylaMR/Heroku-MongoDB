const mongoose = require('../../_connection')

const express = require('express');
const Jeep = require('../../models/image')

const router = express.Router();


// JSON Gallery
router.get('/images', (req, res) => {
  Jeep.find({}, (err, images) => {
    if (err) {
      res.status(404)
      res.sendFile(__dirname + '../../views/pages/error')
    }
    res.json(images)
  })
})

// Single id
router.get('/images/:id', (req, res) => {
  Jeep.findOne({id : req.params.id}, (err, image) => {
    if (err || !image) {
      res.status(404)
      res.sendFile(__dirname + '../../views/pages/error')
    }
    res.json(image)
  })
})


module.exports = router