const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  posttext: { type: String},
  likes:{ type: Number,default:0},
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Posts', postSchema );