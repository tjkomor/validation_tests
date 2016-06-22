function Validator (){
  this.errorMessage = null
}

Validator.prototype.isValid = function(user) {
  if(this.nameValidate(user.params.firstName) && this.nameValidate(user.params.lastName) && this.emailValidate(user.params.email)) {
    return true;
  }
  return false;
}

Validator.prototype.checkNameLength = function (name){
  if (name && name.length < 2){
    this.errorMessage = "Name must be longer than two characters"
    return false
  } else if (name && name.length > 30){
    this.errorMessage = "Name must be shorter than 30 characters"
    return false
  }
  return true
}

Validator.prototype.checkSpecialChars = function (name){
  var regex = /^[a-zA-Z]+$/
  if (regex.test(name)){
    this.errorMessage = "Must enter valid alpahbetic charcaters"
    return true
  }
}


Validator.prototype.nameValidate = function(name) {
  if (name && this.checkNameLength(name) && this.checkSpecialChars(name)){
    return true
  }
  return false
}

Validator.prototype.emailValidate = function (email){
  if (email && email.includes('@') && email.includes('.') && !email.includes(' ')){
    return true
  }
  this.errorMessage = "Must enter a valid email address"
}

module.exports = Validator;
