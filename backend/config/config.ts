import dotenv from 'dotenv'


if(process.env.NODE_ENV!=="PRODUCTION"){

dotenv.config()
}

const MONGO_USER=process.env.MONGO_USER || '';
const MONGO_PASS=process.env.MONGO_PASS || '';
const MONGO_URL=process.env.DbURL || '';
const PORT=process.env.PORT?Number(process.env.PORT):3000;
const HOSTNAME=process.env.HOSTNAME || "localhost"

export const config={
mongo:{
    url:MONGO_URL
},
server:{
    port:PORT,
    host:HOSTNAME
}
}