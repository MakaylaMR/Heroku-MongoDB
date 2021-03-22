const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const dbSeed = require(`./seeds/images.js`);

// Define model
const Jeep = require(`./models/image.js`);

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', (error) => {
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', () => {
  console.log('Connected to DB...');
});

Jeep.insertMany(dbSeed, (error, images) => {
  console.log('Data import completed.')
  console.log(images);
  mongoose.connection.close();
});