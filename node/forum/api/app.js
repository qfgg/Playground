const express = require('express');
const userRouter = require('./routers/index.js');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


mongoose.connect('mongodb://localhost/forum', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
});

mongoose.connection.on("error", err => {
    console.log("err", err)
});
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
});

const app = express();
app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(userRouter);

const PORT = 9000;
app.listen(PORT, function() {
    console.log(`app is listening to PORT ${PORT}`);
});