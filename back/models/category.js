const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  food: { type: String, required: true},
  drugs: { type: String, required: true },
  cloth: { type: String, required: true},
  energy: {type: String, required: true},
  house: { type: String, required: true },
  health: { type: String, required: true},
  transport: {type: String, required: true},
  communication: { type: String, required: true},
  hobby: { type: String, required: true },
  learning: { type: String, required: true},
  restaurant: {type: String, required: true},
  service: {type: String, required: true}

});

module.exports = mongoose.model('Category', categorySchema);