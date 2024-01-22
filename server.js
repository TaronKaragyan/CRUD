const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
const app = express();
const port = 3000;

const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://TaronKaragyan:094690398Taron@cluster0.jctwsr0.mongodb.net/sample_mflix';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

// Define a Mongoose schema and model for the Person collection
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});


const Person = mongoose.model('Person', personSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// data = [{
//     name: "Taron1",
//     email: 'taron.who.tf.caewwfres@gmail.com',
//     password: '094690398'
// }]
// db.once('open', async () => {
//     try {
//         const allMovies = await mongoose.connection.db.collection('users')

//         app.post('/submit', (req, res) => {
//             let Name = req.body.name;
//             let Email = req.body.email;
//             let Password = req.body.password;

//             data = [{
//                 name: Name,
//                 email: Email,
//                 passwprd: Password,
//             }]
//             allMovies.insertMany(data)
//             console.log(data)
//             res.status(200).send('Data received successfully');
//         });

//         app.get('/', function (req, res) {
//             res.sendFile(path.join(__dirname, './public/form.html'));
//         });

//         app.listen(port, () => {
//             console.log(`Server is running at http://localhost:${port}`);
//         });

//         console.log('All Movies:', allMovies);
//     }
//     catch (error) {
//         console.error('Error retrieving movies:', error);
//     }
//     // finally {
//     //     mongoose.connection.close();
//     // }
// })


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/form.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.post('/submit', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
           let result = await mongoose.connection.db.collection('users').insertOne({
                name: name,
                email: email,
                password: password
            })
            res.json(result);
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
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

// try {
//     var result = await mongoose.connection.db.collection('sessions').find().toArray()
//     console.log(result);
//     } catch (error) {
//     console.error('Error retrieving movies:', error);
//     } finally {
//     mongoose.connection.close();
//     }

// app.get('/data', async (req, res) => {
//     try {
//       // Query data
//       const result = await YourModel.find({ /* your query criteria */ });
//       res.json(result);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });


//     // Fetch data from the server and update the DOM
//     async function fetchData() {
//       const response = await fetch('/data');
//       const data = await response.json();

//       const dataList = document.getElementById('dataList');
//       dataList.innerHTML = '';

//       data.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = item.fieldName; // Replace 'fieldName' with the actual field you want to display
//         dataList.appendChild(listItem);
//       });
//     }

//     // Call the fetchData function when the page loads
//     window.onload = fetchData;


