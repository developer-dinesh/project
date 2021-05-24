const express = require('express')
const app = express();
const mongoose = require('mongoose')


const routeUrls = require('./routes/route')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors')

mongoose.connect("mongodb://localhost:27017/userdetails",{useFindAndModify:false, useCreateIndex:true ,useNewUrlParser: true,useUnifiedTopology: true}, () => console.log("database connected successfullly"));

app.use(express.json())

app.use(cookieParser());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors())
app.use('/app', routeUrls)
app.listen( 5000, () => console.log("server is running at  5000"))