const express = require('express');
const Jeep = require('../../models/image')

const router = express.Router();


// sends gallery array in JSON
router.get('/images', (req, res) => {
  Jeep.find({}, (err, images) => {
    if (err) {
      res.status(404)
      // sending my custom made 404 page as a response to any 404 error code
      res.sendFile(__dirname + '../../public/404.html')
    }
    res.json(images)
  })
})

// single image by id number
router.get('/images/:id', (req, res) => {

  Jeep.findOne({id : req.params.id}, (err, image) => {
    if (err || !image) {
      res.status(404)
      // sending my custom made 404 page as a response to any 404 error code
      res.sendFile(__dirname + '../../public/404.html')
    }
    res.json(image)
  })
})


module.exports = router