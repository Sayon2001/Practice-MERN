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

app.post("/blog", upload.single('image'), async(request,response)=>{
    const {title,subtitle,description} = request.body
    const filename = request.file.filename
    if(!title || !subtitle || !description){
        return response.status(400).json({
            message: 'All fields are required'
        })  // Returning 400 Bad Request if required fields are missing.

    }
    await Blog.create({
        title : title,
        subtitle : subtitle,
        description : description,
        image : filename
    })
    response.status(200).json({
        message: 'Blog api hit successfully'
    })   
})

app.get('/blog',async(request, response) => {
    const blogs = await Blog.find()
    response.status(200).json({
        message: 'Blogs fetched successfully',
        data:blogs
    })
})

app.use(express.static('./storage'))

app.listen(process.env.PORT,()=>{
    console.log('NodeJs project has started')
})
