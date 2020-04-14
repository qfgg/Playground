const express = require('express');
const userRouter = require('./routers/index.js');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://locahost/forum', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(9000, () => {
    console.log('server running on port 9000');
});