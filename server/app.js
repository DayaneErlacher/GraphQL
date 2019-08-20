const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
// const mongodb = require('mongodb').MongoClient;

const app = express();
// mongodb.connect()
// mongodb.connect('mongodb+srv://mongodb+srv://day:teste123@cluster0-aud1b.mongodb.net/test?retryWrites=true&w=majority');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log('now listening for requests on port 4000');
});

