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
    const blogs = await Blog.find() //array ma return garxa
    response.status(200).json({
        message: 'Blogs fetched successfully',
        data:blogs
    })
})

app.get('/blog/:id',async(request, response) => {
    const id = request.params.id
    const blog = await Blog.findById(id) //object ma return garxa
    if(!blog){
        return response.status(404).json({
            message: 'Blog not found'
        })
    }
    response.status(200).json({
        message: 'Blog fetched successfully',
        data: blog
    })
})

app.delete('/blog/:id',async (request, response) => {
    const id = request.params.id
    await Blog.findByIdAndDelete(id)
    response.status(200).json({
        message: 'Blog deleted successfully'
    })
})

app.use(express.static('./storage'))

app.listen(process.env.PORT,()=>{
    console.log('NodeJs project has started')
})
