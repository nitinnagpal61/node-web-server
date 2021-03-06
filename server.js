const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.port || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view name','hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getFullYear',()=>{return new Date().getFullYear();});


app.use((req,res,next)=>{
  res.render('maintainance.hbs');
});

app.get('/',(req,res)=>{
  res.send(`<h1>hello world</h1>`);
});

app.get('/about',(req,res)=>{
  res.render(`about.hbs`,{ pageTitle : 'About Page'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);;
});
