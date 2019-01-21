const express = require('express');
const app = express();

const {mongoose} = require('./config/db');
const {routes} = require('./config/routes');

let port = process.env.PORT || 3001;

app.use(express.json());

app.use('/',routes);

app.listen(port,() => {
    console.log(`You are listening at port ${port}`);
})