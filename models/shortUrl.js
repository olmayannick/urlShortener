const mongoose = require('mongoose')
const stringGenerator = require("../build/stringGenerator.js")

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: stringGenerator.generateString()
  },

})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)