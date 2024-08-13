const express = require('express')
const connectToDatabase = require('./database')
const app = express()

connectToDatabase()

app.get('/',(request,response)=>{
    response.status(200).json({
        message: 'Welcome to the API!'
    })
})

app.get('/about',(request,response)=>{
    response.json({
        message: 'This is about page'
    })
})

app.listen(3000,()=>{
    console.log('NodeJs project has started')
})
