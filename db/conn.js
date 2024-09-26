const mongoose = require("mongoose");
require('dotenv').config();


const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;



async function main() {

    try {

        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.rtz8i2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Connected to MongoDB")
    } catch (error) {

        console.log(`Error: ${error}`);
    }
}

module.exports = main