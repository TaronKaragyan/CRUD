const mongoose = require('mongoose');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://TaronKaragyan:<094690398Taron>@cluster0.jctwsr0.mongodb.net/?retryWrites=true&w=majority';


// Connect to MongoDB
mongoose.connect(connectionString, { useUnifiedTopology: true });

// Check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB!');
// You can add additional code here for testing or other operations
// Make sure to close the connection when you're done
mongoose.connection.close();
});
