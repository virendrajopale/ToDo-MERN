import express from 'express'
import cookie_parser from 'cookie-parser'
import toDoRouter from './Routes/TodoRoute';
import connectDb from './config/database';
import { config } from './config/config';
const app:express.Application= express();

connectDb()
app.use(express.json());
app.use(cookie_parser())
app.use(express.urlencoded({extended:true}))

app.use('/todo',toDoRouter);


// console.log(port)
if(config.server.port && config.server.host){

  app.listen(Number(config.server.port),config.server.host ,() => {
    console.log(`Server is running on port http://${config.server.host}:${config.server.port}`);

  });
}