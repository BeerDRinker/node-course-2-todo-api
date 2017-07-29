const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { User } = require('./../server/models/user');
const { Todo } = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({}).then((result) => {

// });

Todo.findByIdAndRemove('597ca1d37b91a4c8d2432dff').then((todo) => {
    console.log(todo);
});

