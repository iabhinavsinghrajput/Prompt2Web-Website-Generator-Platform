import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log('MongoDB connect successfully')

    }catch(error){
        console.log('MongoDb connection error',error)

    }
}
export default connectDB