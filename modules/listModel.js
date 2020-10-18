const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "enter name of catagory"
    },
    username: {
        type: String,
        trim: true,
        required: "enter top 5 of answers"
    }
});

const List = mongoose.model("List", listSchema);

module.exports = List;