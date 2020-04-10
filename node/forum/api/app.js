const express = require('express');
const userRouter = require('./routers/index.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://locahost/test', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(9000, () => {
    console.log('server running on port 9000')
})