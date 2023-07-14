import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI)
{
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached)
{
    cached = global.mongoose = {
        connection: null,
        promise: null
    }
}

async function dbConnect()
{
    if (cached.connection)
    {
        return cached.connection;
    }

    if (!cached.promise)
    {
        const options = { bufferCommands: false };

        cached.promise = mongoose.connect(MONGODB_URI, options)
            .then((mongoose) =>
            {
                return mongoose;
            });
    }

    try
    {
        cached.connection = await cached.promise;
    }
    catch (error)
    {
        cached.promise = null;
        throw error;
    }

    return cached.connection;
}

export default dbConnect;