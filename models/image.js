const mongoose = require('mongoose');

const jeepSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    width: Number,
    height: Number,
    pathURL: String,
    credit: String,
    creditLink: String,
    alt: String
  }
);

const Jeep = mongoose.model('Jeep', jeepSchema);
module.exports = Jeep;