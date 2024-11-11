const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const URI = `mongodb+srv://${process.env.USER_DB_MONGO_DB}:${process.env.PASSWORD_DB_MONGO_DB}@notasapp.lmk3k.mongodb.net/${process.env.NAME_DB_MONGO_DB}?retryWrites=true&w=majority&appName=NotasApp0`

async function conectarMongoDB() {
    try{
        await mongoose.connect(URI);
        console.log("DB MongoDB Conectada correctamente - ")
    }catch (error){
        console.log(error);
        process.exit(1);
    }
}

// conectarMongoDB()

module.exports = { conectarMongoDB };