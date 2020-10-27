const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
    }
});

const list = mongoose.model("list", listSchema);

module.exports = list;