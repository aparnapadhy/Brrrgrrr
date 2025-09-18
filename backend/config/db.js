import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load environment variables

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error("DB connection error:", err));
}
