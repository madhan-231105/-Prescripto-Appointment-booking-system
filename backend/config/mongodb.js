import mongoose from 'mongoose'

const connectDB = async () => {
    // 1. Listen for connection success
    mongoose.connection.on('connected', () => console.log("Database Connected"));

    // 2. Use MONGODB_URI (matching your .env)
    // Also, wrap in try-catch for better error logging
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
    }
}

export default connectDB;