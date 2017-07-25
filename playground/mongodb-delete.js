// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unaale to connect tot MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    //deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //dleteOne

        // db.collection('Todos').deleteOne({name: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });

    //findOneAndDelete

        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        //     console.log(result);
        // });

    // db.collection('Users').deleteMany({Name: 'Ros'}).then((result) => {
    //     console.log(result);
    // });


    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5976e2a8e10eaa1470a6f5f3')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.close();
});