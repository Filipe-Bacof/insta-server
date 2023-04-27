const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        profileImage: String,
        bio: String,
    },
    {
        timestamps: true, // adiciona dois campos "created at" e "updated at"
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
