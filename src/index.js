import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var pg = require('pg');
var express = require('express');
var app = express();

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
