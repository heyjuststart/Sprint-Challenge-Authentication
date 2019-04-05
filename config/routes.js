const axios = require('axios');
const bcrypt = require('bcrypt');
const Users = require('../users/model');

const { authenticate, generateToken } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const user = req.body;

  if (user.username && user.password && user.department) {
    user.password = bcrypt.hashSync(user.password, 8);
    const token = generateToken(user);

    Users.insert(user)
      .then(saved => {
        res.status(201).json({ ...saved, token });
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    req
      .status(401)
      .json({ message: 'Please provide username, and password' });
  }

}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
