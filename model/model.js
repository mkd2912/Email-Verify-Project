const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
 number: {
 type: Number,
 }
});
const User = mongoose.model("User", UserSchema);
module.exports = User