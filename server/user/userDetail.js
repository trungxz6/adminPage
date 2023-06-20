const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: String,
        email:  String,
        password: String,
        address: String,
        phoneNumber: String,
    },{
        collection: "userInfo"
    }
);
mongoose.model("userInfo", userSchema)