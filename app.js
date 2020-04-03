let fs = require('fs');
let path = require('path');
let express = require('express');
let createError = require('http-errors');
let handlebars = require('express-handlebars');
let session = require('express-session');
let pg = require('pg');
let Knex = require('knex');
let { Model } = require('objection');

let app = express();

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = app.get('env');
}

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'layout'
}));


app.root = (...args) => path.join(__dirname, ...args);
app.inProduction = () => app.get('env') === 'production';
app.inDevelopment = () => app.get('env') === 'development';
console.log('APP.ROOT: ', app.root('public'));

app.use(express.static(app.root('public')));
app.use(express.urlencoded({ extended: false }));

// Tell Knex how to connect to our database
// See config/database.js
let dbConfig = require(app.root('knexfile'));
let knex = Knex(dbConfig[process.env.NODE_ENV]);
Model.knex(knex);

let routes = require('./routes');
app.use('/', routes);

// If no route handled the request then generate an
// HTTP 404 Not Found error
app.use((req, res, next) => {
  next(createError(404));
});

// A catch-all error handler.
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.inDevelopment() ? err : {};

  res.status(err.statusCode || 500);
  res.render('server-error');
});

module.exports = app;
