require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const app = express()

connectToDatabase()

app.use(express.json())

app.get('/',(request,response)=>{
    response.status(200).json({
        message: 'Welcome to the API!'
    })
})

app.post("/blog",(request,response)=>{
    console.log(request.body)
    response.status(200).json({
        message: 'Blog api hit successfully'
    })   
})

app.listen(process.env.PORT,()=>{
    console.log('NodeJs project has started')
})
