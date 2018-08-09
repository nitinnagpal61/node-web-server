var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email : {
    type : String,
    required : true,
    multilength : 1,
    trim : true
  }
});


module.exports = {User};
