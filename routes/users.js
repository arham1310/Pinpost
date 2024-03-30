var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/pinpost");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required:true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String,
  },
  email: {
    type: String,
     required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },

}); 
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);