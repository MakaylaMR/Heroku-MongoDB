const express = require('express')
const router = express.Router()
const config = require('../config')
const Jeep = require('../models/image')

// global ejs variables
router.use((req, res, next) => {
  res.locals = config
  next()
})

// single image page
router.get('/:id', async (req, res, next) => {
  try {
    const image = await Jeep.findOne({id: req.params.id});
    if(image) return res.render("pages/single-image", {
      pageTitle: jeep.title,
      image: jeep,
    });
    return next(new Error ('Failed to find image'));
  }catch(err){
    return next(err);
  }
});

module.exports = router