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
router.post('/',(req,res) => {
    let body = req.body;
    let newTodo = new Todo(body);
    newTodo.save().then((todo) => {
        res.send(todo);
    }).catch((err) => {
        res.send(err);
    })
});

//UPDATE  a todo
router.put('/:id',(req,res) => {
    let body = req.body;
    let id= req.params.id;

    Todo.findByIdAndUpdate({_id: id},{$set: body},{new: true ,runValidators: true}).then((editTodo) => {
        res.send({
            todo : editTodo,
            notice: 'Your todo was updated succesfully!'
        })
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