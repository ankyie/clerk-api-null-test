import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number;
}

const connection: connectionObject = {};

export default async function dbConnect(): Promise<void>{
    if (connection.isConnected) {
        console.log("DB already connected.")
        return;
    }

    const mongodbUri = process.env.MONGODB_URI

    if (!mongodbUri) {
        console.error("MONGODB_URI is not defined in the environment.");
        process.exit(1);
    }

    try {
        await mongoose.connect(mongodbUri);

        connection.isConnected = mongoose.connection.readyState;

        console.log("DB connected successfully!")
    } catch (error) {
        console.error("Error connecting to DB: ", error)
        process.exit(1);
    }
}