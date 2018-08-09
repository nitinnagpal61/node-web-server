const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return console.log('Error connecting to the db');
    }
    console.log(`Connected to the db ${client}`);
    client.close();
});
