const express = require('express')
require('./config/database')
const cors = require('cors')
const weatherRouter = require('./route/weatherRouter')
const PORT = process.env.PORT

const app = express();


app.use(express.json())
app.use('/api/v1', weatherRouter)
app.use(cors())

app.listen(PORT, ()=>{
console.log(`server is listening to PORT: ${PORT}`)
})