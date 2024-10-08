const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const expressValidator = require("express-validator")
const cors = require("cors")


//app
const app = express();

require("dotenv").config();

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
    app.listen(port, () => {
      console.log(`server runs on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("DB Error", err));

  
//import routes
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const categoryRouter = require("./routes/category")
const productRouter = require('./routes/product')

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(expressValidator())

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE',  // Specify the methods you want to allow
  allowedHeaders: 'Content-Type,Authorization' // Specify the headers you want to allow
};
app.use(cors(corsOptions))


// routes middleware

app.use('/api',authRouter)
app.use('/api',userRouter)
app.use('/api',categoryRouter)
app.use('/api',productRouter)

const port = process.env.PORT || 8000;
