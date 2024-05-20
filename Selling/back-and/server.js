const express = require ('express')
const app = express()
const BodyParser = require ('body-parser')
app.use(BodyParser.json())
const dotenv = require("dotenv")
dotenv.config()
const cors = require ('cors')
app.use(cors())
const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const PORT = 5055

mongoose.connect('mongodb+srv://GunelImanova:07112002@cluster0.1toudkm.mongodb.net/')
  .then(() => console.log('Connected!'));
  const ProductSchema = new mongoose.Schema({
    title: String,
    img: String,
    discraption: String
  });
  const ProductModel = mongoose.model('Products', ProductSchema);

  app.get ('/api/product',(req,res) =>{
    const {title} =req.query;
    if (title){
        let filtered = data.find ((x)=>x.title.toLocaleLowerCase().trim().includes(title.toLocaleLowerCase().trim()))
        res.send({
            message:"success",
            data:filtered,
        })
    }else{
        res.send({
            message:"success",
            data:data,
        })
    }
})


app.listen (PORT,()=>{
    console.log(`Server Listening on port ${PORT}`);
})