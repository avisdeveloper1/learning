const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
const companyRoutes = require('./routes/company');
const simRoutes = require('./routes/sim');
const server = http.createServer(app);

app.use(companyRoutes);
app.use(simRoutes);
server.listen(3000);