const validator = require("validator");
//import isAlphanumeric from "./../node_modules/validator/es/lib/isAlphanumeric";

let User = function(data) {
    this.data = data;
    this.errors = [];
};
User.prototype.validate = function() {
    if (this.data.username == "") {
        this.errors.push("You must provide a username");
    }
    // if (
    //     this.data.username != "" &&
    //     validator.isAlphanumeric(this.data.username)
    // ) {
    //     this.errors.push("Username can only contain numbers and letters");
    // }
    if (!validator.isEmail(this.data.email)) {
        this.errors.push("You must provide a valid email address");
    }
    if (this.data.password == "") {
        this.errors.push("You must provide a password");
    }
    if (this.data.password.length > 0 && this.data.password.length < 8) {
        this.errors.push(" The password must be atleast 8 characters");
    }
    if (this.data.password.length > 100) {
        this.errors.push("Password cannot exceed 100 characters");
    }
    if (this.data.username.length > 0 && this.data.username.length < 3) {
        this.errors.push("Username must be atleast 3 characters");
    }
    if (this.data.username.length > 30) {
        this.errors.push("Username cannot exceed 30 characters");
    }
};

User.prototype.register = function() {
    //validate user data
    this.validate();

    //only if no validation errors then save the user data
};
module.exports = User;