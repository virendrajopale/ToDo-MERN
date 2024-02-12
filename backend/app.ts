import express from 'express'
import cookie_parser from 'cookie-parser'
import toDoRouter from './Routes/TodoRoute';
import connectDb from './config/database';
import cors from 'cors'
import { config } from './config/config';
const app:express.Application= express();
import path from 'path'
connectDb()
app.use(express.json());
app.use(cookie_parser())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/todo',toDoRouter);

app.use(express.static(path.join(__dirname,"../frontend/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})
// console.log(port)
if(config.server.port && config.server.host){

  app.listen(Number(config.server.port),config.server.host ,() => {
    console.log(`Server is running on port http://${config.server.host}:${config.server.port}`);

  });
}