import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/dev-events";

if(!MONGODB_URI){
 throw new Error(
  'Please define the MONGODB_URI inside .env.local'
 )
}

const connectDB = async() =>{
 try{
  await mongoose.connect(MONGODB_URI);
  console.log('MongoDB connected');
 }
 catch(error){
  console.error('MongoDB connection error:', error);
  process.exit(1);
 }

}

export default connectDB;