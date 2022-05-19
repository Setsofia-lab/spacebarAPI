const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
        const connectingDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: false,
        })

        console.log(`connected to : ${connectingDB.connection.host}`)
    } catch (error) {
        console.log(`error: ${error}`)
    }
}


module.exports = connectDb;