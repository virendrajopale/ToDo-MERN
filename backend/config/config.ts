import dotenv from 'dotenv'

dotenv.config({path:'backend/.env'})

const MONGO_USER=process.env.MONGO_USER || '';
const MONGO_PASS=process.env.MONGO_PASS || '';
const MONGO_URL=`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@blog-web.nr5x3jq.mongodb.net/Todo`
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