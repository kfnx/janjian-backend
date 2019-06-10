const mongoose = require(‘mongoose’);
const Schema = mongoose.Schema;

const janjiSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Janji', janjiSchema);