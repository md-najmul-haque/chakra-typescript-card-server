import express from "express";
import cors from 'cors'

const app = express();

//middleware 
app.use(cors());
app.use(express.json())

//root api
app.get('/', (req, res) => {
    res.status(200).send({
        success: true,
        message: "server is running"
    })
})

export default app;