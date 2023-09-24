require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
console.log(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.error("MongoDB Connection error: ", error));
db.once('open', () => console.log('Connected to Database'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());

// Routes
const testRouter = require('./routes/test');
app.use('/test', testRouter);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));