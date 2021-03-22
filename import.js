const mongoose = require('./_connection');
const dotenv = require('dotenv').config();

// Import seed data
const jeepsSeed = require(`./seeds/images`);

// Define model
const Jeep = require(`./models/image`);

Jeep.insertMany(jeepsSeed, (error, images) => {
  console.log('Data import completed.')
  console.log(images);
  mongoose.connection.close();
});