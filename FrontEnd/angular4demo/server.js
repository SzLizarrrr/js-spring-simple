const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const HEROES = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

app.get('/heroes', (req, res) => {
  res.json(HEROES);
});

app.get('/heroes/:id', (req, res) => {
  var id = +req.params.id;
  res.json(HEROES.find(hero => hero.id === id));
});

app.listen(3000);
