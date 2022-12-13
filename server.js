import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import app from './app.js'


//Database connection 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zb6uth2.mongodb.net/chakra-card`).then(() => {
    console.log('Database connection is successful')
})

// server
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port, ${port}`);
})
