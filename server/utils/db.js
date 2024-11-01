const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_one";
// mongoose.connect()

// const URI = "mongodb+srv://taiyyabmakandar:<password>@cluster0.moundhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successfull to DB");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;