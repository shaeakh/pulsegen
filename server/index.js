const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const aiRouter = require('./routers/aiRouter');
const userRoute = require('./routers/userRouter');

// const PORT = 5000;
const PORT = process.env.PORT;
const DBURL = process.env.DBURL;

app.use(express.json());
app.use('/ai', aiRouter);
app.use('/user', userRoute);
app.get('/', (req, res) => {
    res.send('Welcome to PulseGen');
});

mongoose.connect(DBURL)
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error:', error.message);
    });
