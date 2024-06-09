import mongoose from 'mongoose';
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://sampi:sampi019@maincluster.xmzsuiq.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster");


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }

})


const User = mongoose.model('User', userSchema);

module.exports = {
	User
};