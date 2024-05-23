const mongoose = require('mongoose');

const ConnectToDB=()=>{
    mongoose.connect('mongodb://localhost:27017/MyDB').then(()=>{
        console.log('Connected to DB');
    }).catch(()=>{
        console.log("DB Connection Error")
    })
}
module.exports=ConnectToDB;