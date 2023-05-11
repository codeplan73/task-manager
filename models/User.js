const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'please provide name'],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        require: [true, ['please provide email']],
        validate: validator.isEmail,
        message: "Please provide email",
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 6
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender: {
        type:String
    },
    about: {
        type:String
    },
    address: {
        type:String
    },
});

// before saving the password
UserSchema.pre("save", async function(){
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

module.exports = mongoose.model("User", UserSchema);
