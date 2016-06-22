"use strict";

function User(params) {
  this.params = params;
  this.errorMessage = null
}

User.prototype.userValidator = function() {
  if(this.nameValidator(this.params.firstName) && this.nameValidator(this.params.lastName) && this.emailValidator(this.params.email)) {
    return true;
  }
  return false;
}

User.prototype.nameValidator = function(name) {
  var regex = /^[a-zA-Z ]{2,30}$/
  if(name && regex.test(name)){
    return true
  }
  this.errorMessage = "Must enter valid alpahbetic charcaters"
  return false;
}

User.prototype.emailValidator = function (email){
  if (email && email.includes('@') && email.includes('.') && !email.includes(' ')){
    return true
  }
  this.errorMessage = "Must enter a valid email address"
}

module.exports = User;
