const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    message: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
}
   

)
module.exports = mongoose.model("user", UserSchema);