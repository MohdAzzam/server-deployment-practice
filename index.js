'use strict';

require('dotenv').config();

const PORT = process.env.PORT ||3000 ;

const server = require('./server');

server.start(PORT);
