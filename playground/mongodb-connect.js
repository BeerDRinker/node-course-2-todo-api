// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unaale to connect tot MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Somesing to do',
    //     completed: false
    // }, (err, result) => {

    //     if (err) {
    //         return console.log('Unable to insert todo', err); 
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     Name: 'Ros',
    //     Age: 32,
    //     Location: 'Kiev'
    // }, (err, result) => {

    //     if (err) {
    //         return console.log('Unable to insert User', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());

    // });


    db.close();
});