const express = require('express');
const mongoose = require('mongoose');

const App = express();

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true}, ()=>{
    console.log("Connected");
});

const fileUpload = require('express-fileupload');

App.use(fileUpload());

App.get('/',(req,res)=>{
    res.json({message:"Welcome"});
});

App.use('/api/upload',require('./routes/api/upload'))

App.listen(3000);