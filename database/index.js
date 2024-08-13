const mongoose = require('mongoose')

async function connectToDatabase(){
    await mongoose.connect('mongodb+srv://instinct:passwordiswrong@cluster0.gwh7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Database connected successfully")
}

module.exports = connectToDatabase;