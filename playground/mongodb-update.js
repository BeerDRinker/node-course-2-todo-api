// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unaale to connect tot MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5976e9ea7b91a4c8d2427b1e')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59745d0a967e8144beda8f3b')
    }, 
    {
        $set: {Name: 'Ros'},
        $inc: {Age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5976e2a8e10eaa1470a6f5f3')
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // db.close();
});