const express = require('express');
require('./config/database');
const cors = require('cors');
const weatherRouter = require('./route/weatherRouter');
require('dotenv').config(); 

const PORT = process.env.PORT

const app = express();

app.use(cors({ origin: "*" })); 
app.use(express.json());
app.use(weatherRouter); 

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
