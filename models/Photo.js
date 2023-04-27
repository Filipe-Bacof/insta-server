const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoSchema = new Schema(
    {
        image: String,
        title: String,
        likes: Array,
        comments: Array,
        userId: mongoose.ObjectId,
        userName: String,
    },
    {
        timestamps: true, // adiciona dois campos "created at" e "updated at"
    }
);

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
