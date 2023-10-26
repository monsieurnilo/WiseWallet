const { Date } = require('mongoose');
const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
  amount: { type: Number, required: true },
  user: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Budget', budgetSchema);