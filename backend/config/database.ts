import mongoose from 'mongoose';
import { config } from './config';

const connectDb = (): void => {
 
    if (config.mongo.url) {
        mongoose.connect(config.mongo.url,{retryWrites:true,w:"majority"})
            .then((Response) => {
                console.log("Connected to database");
            })
            .catch((error: Error) => {
                console.log(error);
                // process.exit(1); //stop the connection
            });
    }
};
export default connectDb;