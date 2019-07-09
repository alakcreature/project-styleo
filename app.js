const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const queryRouter = require('./routes/query');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect(`mongodb+srv://alak:${process.env.pwd}@clusternew-fltnd.mongodb.net/project-styleo?retryWrites=true&w=majority`,{
    useNewUrlParser: true 
});

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/query', queryRouter);

app.listen(3000, () => {console.log('Listening to port 3000...')})