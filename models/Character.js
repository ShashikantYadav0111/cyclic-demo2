const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    name:String,
    age:String,
    occupation:String,
    imageuri:String,
});

module.exports = mongoose.model('Character',characterSchema);