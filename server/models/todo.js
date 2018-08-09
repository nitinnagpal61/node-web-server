var mongoose = require('mongoose');
var ToDo = mongoose.model('ToDo',{
  text : {
    type : String,
    trim : true,
    minlength : 1,
    required : true
  },
  completed:{
    type : Boolean,
    default : false
  },
  completedAt:{
    type : Number,
    default : null
  }
});

module.exports = {ToDo};
