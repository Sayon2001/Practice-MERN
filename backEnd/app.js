require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const app = express()
const {multer,storage} = require('./middleware/multerConfig')
const upload  = multer({storage: storage})
const Blog = require('./model/blogModel')

connectToDatabase()

app.use(express.json())

app.get('/',(request,response)=>{
    response.status(200).json({
        message: 'Welcome to the API!'
    })
})

app.post("/blog", upload.single('image'), async(req,response)=>{
    // const {title,subtitle,description,image} = request.body
    // if(!title || !subtitle || !description || !image){
    //     return response.status(400).json({
    //         message: 'All fields are required'
    //     })  // Returning 400 Bad Request if required fields are missing.
    // }
    // await Blog.create({
    //     title : title,
    //     subtitle : subtitle,
    //     description : description,
    //     image : image
    // })
    console.log(req.body);
    console.log(req.file);
    
    
    response.status(200).json({
        message: 'Blog api hit successfully'
    })   
})

app.listen(process.env.PORT,()=>{
    console.log('NodeJs project has started')
})
