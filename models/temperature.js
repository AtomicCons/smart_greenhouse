var mongoose = require('mongoose');

var environmentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: "user_id is required to store data"
  },
  date: {
    type: Date,
    default: Date.now
  },
  temperature: {
    celsius: Number,
    fahrenheit: Number,
    kelvin: Number,
  },
  humidity:{
    type: Number
  }
})
var Environment = mongoose.model('Environment', environmentSchema);

module.exports = Environment;
