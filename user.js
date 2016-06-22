"use strict";

function User(params) {
  this.params = params;
}

User.prototype.userValidator = function() {
  if(this.params.firstName && this.params.lastName && this.emailValidator()) {
    if(this.emailValidator()) return true
    return false;
  }
  return false;
}

User.prototype.emailValidator = function (){
  if (this.params.email && this.params.email.includes('@')) return true
}

module.exports = User;
