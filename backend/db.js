const mongoose = require('mongoose');


const ConnectToDB=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('Connected to DB');
    }).catch(()=>{
        console.log("DB Connection Error")
    })
}
module.exports=ConnectToDB;