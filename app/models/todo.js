const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required : true,
        minlength: 5
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Todo = mongoose.model('Todo',todoSchema);

module.exports ={
    Todo
}