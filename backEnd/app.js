require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const app = express()
const { multer, storage } = require('./middleware/multerConfig')
const upload = multer({ storage: storage })
const Blog = require('./model/blogModel')
const fs = require('fs')
const cors = require('cors')



app.use(cors({
    origin: "http://localhost:5173"
}))

connectToDatabase()

app.use(express.json())

app.get('/', (request, response) => {
    response.status(200).json({
        message: 'Welcome to the API!'
    })
})

app.post("/blog", upload.single('image'), async (request, response) => {
    const { title, subtitle, description } = request.body
    const filename = request.file.filename
    if (!title || !subtitle || !description) {
        return response.status(400).json({
            message: 'All fields are required'
        })  // Returning 400 Bad Request if required fields are missing.

    }
    await Blog.create({
        title: title,
        subtitle: subtitle,
        description: description,
        image: filename
    })
    response.status(200).json({
        message: 'Blog api hit successfully'
    })
})

app.get('/blog', async (request, response) => {
    const blogs = await Blog.find() //array ma return garxa
    response.status(200).json({
        message: 'Blogs fetched successfully',
        data: blogs
    })
})

app.get('/blog/:id', async (request, response) => {
    const id = request.params.id
    const blog = await Blog.findById(id) //object ma return garxa
    if (!blog) {
        return response.status(404).json({
            message: 'Blog not found'
        })
    }
    response.status(200).json({
        message: 'Blog fetched successfully',
        data: blog
    })
})

app.delete('/blog/:id', async (request, response) => {
    const id = request.params.id
    const blog = await Blog.findById(id)
    const imageName = blog.image
    fs.unlinkSync(`storage/${imageName}`, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Image deleted successfully')
        }
    })
    await Blog.findByIdAndDelete(id)
    response.status(200).json({
        message: 'Blog deleted successfully'
    })
})

app.delete('/blog', async (request, response) => {
    await Blog.deleteMany()
    response.status(200).json({
        message: 'All blogs deleted successfully'
    })
})

app.patch('/blog/:id', upload.single('image'), async (request, response) => {
    const id = request.params.id
    const { title, subtitle, description } = request.body
    let imageName;
    if (request.file) {
        imageName = request.file.filename
        const blog = await Blog.findById(id)
        const oldImageName = blog.image
        fs.unlinkSync(`storage/${oldImageName}`, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Image deleted successfully')
            }
        })
    }
    await Blog.findByIdAndUpdate(id, {
        title: title,
        subtitle: subtitle,
        description: description,
        image: imageName
    })
    response.status(200).json({
        message: 'Blog updated successfully'
    })
})

app.use(express.static('./storage'))

app.listen(process.env.PORT, () => {
    console.log('NodeJs project has started')
})
