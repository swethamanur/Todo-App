const express = require('express');
const router = express.Router();

const {todosController} = require('../app/controllers/todos');

router.use('/todos',todosController);

module.exports = {
    routes : router
}


