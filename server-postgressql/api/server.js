const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const authRoutes = require('./controllers/auth');
const princessRoutes = require('./controllers/princesses');
const postRoutes = require('./controllers/posts');

server.use('/auth', authRoutes);
server.use('/princesses', princessRoutes);
server.use('/posts', postRoutes);

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server
