var express = require('express'),
    quotes = require('./routes/quotes');
 
var app = express();
 
app.get('/quotes', quotes.findAll);
app.get('/quotes/random', quotes.random);
app.get('/quotes/search/:query', quotes.search);
app.get('/quotes/:id', quotes.findById);
 
app.listen(1851);
console.log('Listening on port 3000...');