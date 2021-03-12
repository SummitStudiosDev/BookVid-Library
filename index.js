const express = require('express');
var path = require('path');
var fs = require('fs');

const app = express();
app.use(express.static(__dirname))
app.set('view engine', 'pug');

app.get('/', function (req, res) {



  var bookp = path.join(__dirname, 'bibi-bookshelf');
  let bookl = [];

  fs.readdirSync(bookp).forEach(file => {
     bookl.push(file);
  });

  var vidp = path.join(__dirname, 'videos');
  let vidl = [];

  fs.readdirSync(vidp).forEach(file => {
     vidl.push(file);
  });

  res.render('index', { booki : bookl,vidi : vidl } );
});


app.listen(3000, () => {
  console.log('server started');
});