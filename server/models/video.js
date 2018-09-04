const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  url: String,
  descriptiom: String
});
// Name of the collection in db - 3rd arg
module.exports = mongoose.model('video', videoSchema, 'videos');
