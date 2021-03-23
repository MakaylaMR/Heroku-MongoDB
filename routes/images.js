const express = require('express')
const router = express.Router()
const config = require('../config')
const Jeep = require('../models/image')

// Global
router.use((req, res, next) => {
  res.locals = config
  next()
})

// Single id
router.get('/:id', async (req, res, next) => {
  try {
    const jeep = await Jeep.findOne({id: req.params.id});
    if(jeep) return res.render("pages/single-image", {
      pageTitle: jeep.title,
      jeep: jeep,
    });
    return next(new Error ('Failed to find image'));
  }catch(err){
    return next(err);
  }
});

module.exports = router