const express=require('express')
require('dotenv/config')
const mongoose=require('mongoose')
var bodyParser = require('body-parser')
const cors =require('cors')

const app =express()
const userRouter =require('./routes/users')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(
  process.env.DB,{
    useUnifiedTopology:true,useNewUrlParser:true})
    .then(() => console.log('Database connected'))
   .catch(err => console.log(err));
  
app.use('/user',userRouter)


app.listen(3000)