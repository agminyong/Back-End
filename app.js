import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';
import studentRoutes from './routers/StudentRoutes.js';
import cors from "cors";

const app = express();
let corsOptions = {
    origin: process.env.ORIGIN
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(() => {
    console.log(req.path, req.method)
    next();
});


try{
    app.listen(process.env.port || 3000, () =>{
        console.log(`Listening to port 3000 ${process.env.port || 3000}....`);
    });
}catch(e){
    console.log(e);
}

app.use("/students", studentRoutes);