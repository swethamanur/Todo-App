const express= require('express');
const router = express.Router();

const {Todo} = require('../models/todo');

//GET all todos
router.get('/',(req,res) => {
    Todo.find().then((todos) => {
        res.send(todos)
    }).catch((err) => {
        res.send(err);
    })
});

//POST a todo
router.post('/todo',(req,res) => {
    let body = req.body;
    let newTodo = new Todo(body);
    newTodo.save().then((todo) => {
        res.send(todo);
    }).catch((err) => {
        res.send(err);
    })
});

//DELETE a todo
router.delete('/:id',(req,res) => {
    let id = req.params.id;
    Todo.findByIdAndRemove({_id : id}).then((todo) => {
        console.log('deletd')
        res.send({
            todo,
            notice: 'You succesfully deleted the todo!'
        });
    }).catch((err) => {
        res.send(err);
    })
});

module.exports = {
    todosController : router
}