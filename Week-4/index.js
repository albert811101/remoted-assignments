const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Creat Connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'assignment'
});

//Connect
db.connect((err) =>{
  if(err){
    throw err;  
  }  
  console.log('MySql Connected!');
})

const app = express();
app.use(express.static('public'));


//Creat DB
app.get('/createdb', (req, res) => {
  let sql = 'create database assignment';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Database created');  
  });
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get("/login_user", (req, res) => {
  console.log(req.query.email, req.query.password);
  let check_exist_sql = `SELECT COUNT(1) FROM user WHERE email = '${req.query.email}';`;
  let query = db.query(check_exist_sql, (err, results) => {
    if (err) throw err; 
    console.log(results);
    if (results[0]["COUNT(1)"]) {
      let get_user_sql = `SELECT password FROM user WHERE email = '${req.query.email}';`;
      let query = db.query(get_user_sql, (err, results) => {
        if (err) throw err;
        let db_password = results[0]["password"];
        if (db_password === req.query.password) {
          res.send("password correct");
        } else {
          res.send("password incorrect");
        }
      });
    } else {
      res.send("email not exist");
    }
  });
});

app.get("/signup_user", (req, res) => {
console.log(req.query.email, req.query.password);
  let check_exist_sql = `SELECT COUNT(1) FROM user WHERE email = '${req.query.email}';`;
  let query = db.query(check_exist_sql, (err, results) => {
    if (err) throw err; 
    console.log(results);
    if (results[0]["COUNT(1)"]) {
      res.send('user exist');
    } else {
      let user = {
        email: req.query.email,
        password: req.query.password,
      };
      let sql = "INSERT INTO user SET ?;";
      let query = db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.send("new user");
      });
    }
  });
});




app.get('/member', (req, res) => {
  res.render('member');
});










app.listen(5500, () => {
    console.log('The application is running on localhost:5500!');
});

module.exports = app;