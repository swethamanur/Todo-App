const mongoose = require('mongoose');
mongoose.promise = global.promise;



mongoose.connect('mongodb://localhost:27017/todo',{useNewUrlParser : true}).then(() => {
    console.log('connected to the db');
}).catch((err) => {
    console.log(err);
});


module.exports = {
    mongoose
}