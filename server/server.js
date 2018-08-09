var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new ToDo({
    text : req.body.text
  });


  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.send(e);
  });
});


app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    res.send(`Id not valid`);
  }

  ToDo.findById(id).then((todo)=>{
    if(!todo){
      res.status(404).send();
    }

    res.status(200).send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });

});


app.listen(3000,()=>{
  console.log('Starting the server at 3000');
});

module.exports = {app};
