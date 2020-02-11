
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({

  title:{
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    },
    author:{
      type: String,
      minlength: 2,
      maxlength: 100,
      required: true,
      },
  date:{
    type: Date,
    required:true
  },
  readTime:{
    type: Number,
    required:true
  },
  image:{
    type :String,
    required: false
  }
})

module.exports = mongoose.model('Posts',postsSchema)