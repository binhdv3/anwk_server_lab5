const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 3000;
const app = express(); //
const db = require('./config/db/index');
const router = require('./routers/index')
db.connect();

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

app.use(express.urlencoded())
app.use(express.json())

app.use(morgan('combined'));

router(app)

app.listen(port, console.log(`example app listening at http://localhost:${port}`))