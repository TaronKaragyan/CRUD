const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
const app = express();
const port = 3000;

const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://TaronKaragyan:094690398Taron@cluster0.jctwsr0.mongodb.net/?retryWrites=true&w=majority';

// Define a Mongoose schema and model for the Person collection
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

mongoose.connect(connectionString);

const Person = mongoose.model('Person', personSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.post('/submit', (req, res) => {
    const Name = req.body.name;
    const Age = req.body.age;
    console.log('Received data:', Name, Age);
    data = [{
        name: Name,
        age: Age,
    }]
    Person.insertMany([data])
    console.log(data)
    res.status(200).send('Data received successfully');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/form.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



// Check the connection
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', async () => {
//     console.log('Connected to MongoDB!');

//     try {
//         // Retrieve data from the Person collection
//         const people = await Person.find(); // Retrieve all documents

//         console.log('Retrieved data:', people);
//     } catch (error) {
//         console.error('Error retrieving data:', error);
//     } finally {

//         mongoose.connection.close();
//     }
// });

// // Person.insertMany([data])