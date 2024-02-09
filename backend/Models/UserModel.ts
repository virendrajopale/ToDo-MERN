import mongoose,{Document,Schema,model} from 'mongoose';

export interface User extends Document{
   userName:string,
   email:string,
   password:string
}
const UserSchema=new Schema({
    userName:{
        type:String,
        required:true,
        maxLenght:[12,"Username Should Less than 12 Characters"],
        minLenght:[4,"Username Should more than 4 character"]
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
})
export default model<User>('User',UserSchema)