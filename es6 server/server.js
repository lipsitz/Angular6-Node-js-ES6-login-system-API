// server.js
import express from 'express';
import User from './src/controllers/User';
import Omdb from'./src/controllers/Omdb';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! aaa Your first endpoint is working'});
})
var cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.post('/api/v1/users/login', User.login);
app.get('/api/v1/omdb', Omdb.getAlldata);
app.listen(3000)
console.log('app running on port ', 3000);