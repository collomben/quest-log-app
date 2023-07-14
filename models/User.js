import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, 'First Name is a required field'],
            maxlength: [60, 'First Name cannot be more than 60 characters']
        },

        last_name: {
            type: String,
            required: [true, 'Last Name is a required field'],
            maxlength: [60, 'Last Name cannot be more than 60 characters']
        },

        email: {
            type: String,
            required: [true, 'Email is a required field'],
            maxlength: [60, 'Email cannot be more than 60 characters']
        },

        username: {
            type: String,
            required: [true, 'Username is a required field'],
            maxlength: [15, 'Username cannot be more than 15 characters']
        },

        password: {
            type: String,
            required: [true, 'Password is a required field'],
            minlength: [8, 'Password must be at least 8 characters'],
            maxlength: [24, 'Password cannot be more than 24 characters']
        }

    }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);