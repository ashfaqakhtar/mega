import mongoose from "mongoose";

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected");


    } catch (error) {

        console.log("MongoDB connection Failed", error);
        process.exit(1) // exit if database is not connected


    }
};


export default connectDB;