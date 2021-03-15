const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) =>{
  res.render('index');
});

app.get('/data', (req, res) =>{
  if (req.query.number === undefined) {
    res.send("Lack of Parameter");  
  } else if (req.query.number % 1 !== 0 || parseInt(req.query.number) < 0) {
    res.send("Wrong Parameter");
  } else {
    var sum = 0; 
    for(i=0; i<=parseInt(req.query.number); i++) {  
      sum += i;    
    } 
    res.send(sum.toString());    
  }
});

app.get('/myName', (req, res) =>{
  const name = req.cookies.username;
  if (name) {
    res.render('myName', { name });    
    } else {
      res.redirect('/trackName');    
    }
    });
 
app.get('/trackName', (req, res) =>{
  const name = req.cookies.username;
    res.render('trackName');      
});

app.post('/trackName', (req, res) =>{
  res.cookie('username', req.body.username);
  res.redirect('/myName');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});