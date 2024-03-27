const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const aiRouter = require('./routers/aiRouter');

// const PORT = 5000;
const PORT = process.env.PORT;

app.use(express.json());
app.use('/ai', aiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});