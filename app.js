const express = require('express')
const app = express()

app.get('/',(request,response)=>{
    response.send({
        message: 'Welcome to the API!'
    })
})

app.get('/about',(req,res)=>{
    res.json({
        message: 'This is about page'
    })
})

app.listen(3000,()=>{
    console.log('NodeJs project has started')
})