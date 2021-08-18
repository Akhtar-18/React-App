const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            default: 'user',
            enum: ['user','admin','superadmin']
        },
        password: {
            type: String,
            required: true
        },
        accessToken: {
            type: String
        }
    },
    {timestamps: true}
)

const User = mongoose.model('user', UserSchema);

module.exports = User;