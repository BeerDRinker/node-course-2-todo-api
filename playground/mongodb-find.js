// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unaale to connect tot MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5976e9ea7b91a4c8d2427b1e')
    // }).toArray().then((docs) => {

    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    //     db.collection('Todos').find().count().then((count) => {

    //     console.log(`Todos count: ${count}`);

    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });


    db.collection('Users').find({
        Name: 'Ros'
    }).toArray().then((docs) => {

        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    // db.close();
});