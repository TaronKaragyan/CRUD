// const express = require('express');
// const bodyParser = require('body-parser');
// var path = require("path");
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://TaronKaragyan:094690398Taron@cluster0.jctwsr0.mongodb.net/test';
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));

// // Define a Mongoose schema and model for the Person collection
// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     password: String,
// });


// const Person = mongoose.model('Person', personSchema);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.set("vies engine", "ejs");

// db.once('open', async () => {
//     try {

//         //console.log(Bloomington)
//         app.post('/submit', async (req, res) => {
//             const name = req.body.name;
//             const age = req.body.age;
//             const password = req.body.password;
//             const email = req.body.email;
//             mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
//             const db = mongoose.connection;
//             db.on('error', console.error.bind(console, 'Connection error:'));
//             db.once('open', async () => {
//                 console.log('Connected to MongoDB!');
//                 try {
//                     let resul1 = await Person.create({
//                         "name" : name,
//                         "age": age,
//                         "email": email,
//                         "password": password,
//                     })
//                     //let result = await mongoose.connection.db.collection('people').find({'name': 'Taron1'}).toArray()
//                     //let result = await mongoose.connection.db.collection('people').insterMany(resul1)
//                     res.json(result);
//                 } catch (error) {
//                 } finally {
//                     mongoose.connection.close();
//                 }
//             })
//          });

//         app.get('/', function (req, res) {
//             const name = req.body.name;
//             mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
//             const db = mongoose.connection;
//             db.on('error', console.error.bind(console, 'Connection error:'));
//             db.once('open', async () => {
//             try {
//                 let result = await mongoose.connection.db.collection('people').toArray()
//                 res.render('../public/form.ejs', {
//                     obj: result
//                 });
//                 } catch (error) {
//                 } finally {
//                     mongoose.connection.close();
//                 }
//             })
//         });

//         // app.get('/name/:name', function (req, res) {
//         //     const name = req.params.name;
//         //     mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
//         //     const db = mongoose.connection;
//         //     db.on('error', console.error.bind(console, 'Connection error:'));
//         //     db.once('open', async () => {
//         //     try {
//         //         let result = await mongoose.connection.db.collection('people').find({'name': Taron1}).toArray()
//         //         res.render('../public/form.ejs', {
//         //             obj: result
//         //         });
//         //         } catch (error) {
//         //         } finally {
//         //             mongoose.connection.close();
//         //         }
//         //     })
//         // });


//         app.listen(port, () => {
//             console.log(`Server is running at http://localhost:${port}`);
//         });
//     }
//     catch (error) {
//         console.error('Error retrieving movies:', error);
//     }
//     finally {
//         mongoose.connection.close();
//     }
// })


// // db.on('error', console.error.bind(console, 'Connection error:'));
// // db.once('open', async () => {
// //     console.log('Connected to MongoDB!');
// //     try {
// //         const people = await mongoose.connection.db.collection('movies').deleteOne({title: "The Great Train Robbery"})
// //     } catch (error) {
// //         console.error('Error retrieving data:', error);
// //     } finally {

// //         mongoose.connection.close();
// //     }
// // });

// // Soon may the wellerman come to bring us sugar and tea and rum one day when the tonguin is done we'll take our leave and goooooo! Hi my name is Taron And I study math in school of Politexhnik in Yerevan :> 

// // // Person.insertMany([data])

// // try {
// //     var result = await mongoose.connection.db.collection('sessions').find().toArray()
// //     console.log(result);
// //     } catch (error) {
// //     console.error('Error retrieving movies:', error);
// //     } finally {
// //     mongoose.connection.close();
// //     }

// // app.get('/data', async (req, res) => {
// //     try {
// //       // Query data
// //       const result = await YourModel.find({ /* your query criteria */ });
// //       res.json(result);
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ error: 'Internal Server Error' });
// //     }
// //   });


// //     // Fetch data from the server and update the DOM
// //     async function fetchData() {
// //       const response = await fetch('/data');
// //       const data = await response.json();

// //       const dataList = document.getElementById('dataList');
// //       dataList.innerHTML = '';

// //       data.forEach(item => {
// //         const listItem = document.createElement('li');
// //         listItem.textContent = item.fieldName; // Replace 'fieldName' with the actual field you want to display
// //         dataList.appendChild(listItem);
// //       });
// //     }

// //     // Call the fetchData function when the page loads
// //     window.onload = fetchData;



var express = require("express");
var path = require("path");
const bodyParser = require('body-parser');
var app = express();
const { ObjectId } = require('mongoose').Types;

const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://TaronKaragyan:094690398Taron@cluster0.jctwsr0.mongodb.net/TUMO_CRUD';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));

app.get("/", function (req, res) {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        try {
            let result = await mongoose.connection.db.collection('Users').find().toArray()
            res.render('../public/form.ejs', {
                obj: result
            });
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});

app.post('/addName', async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
    const des = req.body.description;
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        console.log('Connected to MongoDB!');
        try {
            let result = await mongoose.connection.db.collection('Users').insertOne({
                name: name,
                age: age,
                email: email,
                password: password,
                description: des
            })
            res.json(result);
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});

app.get("/delete/:id", function (req, res) {
    var id = req.params.id;
    console.log("I think we got there")
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        try {
            let result = await mongoose.connection.db.collection('Users').deleteOne({ _id: new ObjectId(id) });
            res.redirect('/');
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});

app.get("/update/:id", function (req, res) {
    var id = req.params.id;
    console.log("I think we got there")
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', async () => {
        try {
            let result = await mongoose.connection.db.collection('Users').findOne({ _id: new ObjectId(id) });
            res.render('../public/update.ejs', {
                obj: result
            });
        } catch (error) {
            console.error('Error retrieving movies:', error);
        } finally {
            mongoose.connection.close();
        }
    })
});

app.get("/name:name", function (req, res) {
    var name = req.params.name;
    console.log("hi " + name)

})

app.post("/updateData", function (req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const des = req.body.description;
    const uuid = req.body.uuid;
    const id = req.body.id;

    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection error:'));

    db.once('open', async () => {
        console.log('Connected to MongoDB!');

        try {
            let result = await mongoose.connection.db.collection('Users').updateOne(
                { _id: new ObjectId(id) },
                { $set: { name: name, price: price, image: image, description: des, uuid: uuid } }
            );

            res.redirect('/');
        } catch (error) {
            console.error('Error updating product:', error);
        } finally {
            
            mongoose.connection.close();
        }
    });
});



app.listen(3001, function () {
    console.log("Example is running on port 3000");
});
