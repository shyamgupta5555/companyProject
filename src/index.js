const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config();

const port = process.env.PORT 

app.use("/" ,(req,res)=>{
  return res.status(200).send({message :"Hello Word"})
})


app.listen(port , (err)=>{
  if(err)return console.log(err.message)
  console.log("Application running port :",port)
})

