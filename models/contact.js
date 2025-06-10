const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['New', 'In Progress', 'Closed'], default: 'New' },
  email: { type: String },
  product: { type: String },
  notes: { type: String },
  created: { type: Date, default: Date.now },
  assignToBudget: { type: String }, 
  date: { type: String },
  time: { type: String }  
});

module.exports = mongoose.model('Contact', contactSchema);
