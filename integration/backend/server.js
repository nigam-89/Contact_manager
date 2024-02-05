const express=require('express')
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
dotenv.config()

connectDb()
const app=express();

const port= process.env.PORT || 5000

//express provide middleware for json object for bodyparser
app.use(express.json());

//middleware
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})