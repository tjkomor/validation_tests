function Validator (){
  this.errorMessage = null
}

Validator.prototype.isValid = function(user) {
  if(this.nameValidate(user.params.firstName) && this.nameValidate(user.params.lastName) && this.emailValidate(user.params.email)) {
    return true;
  }
  return false;
}

Validator.prototype.nameValidate = function(name) {
  var regex = /^[a-zA-Z ]{2,30}$/
  if(name && regex.test(name)){
    return true
  }
  this.errorMessage = "Must enter valid alpahbetic charcaters"
  return false;
}

Validator.prototype.emailValidate = function (email){
  if (email && email.includes('@') && email.includes('.') && !email.includes(' ')){
    return true
  }
  this.errorMessage = "Must enter a valid email address"
}

module.exports = Validator;
