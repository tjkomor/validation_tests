"use strict";

var expect = require('chai').expect;
var User = require('../user')
var Validator = require('../validator')

describe('User', function() {
  it('should only accept a valid string as a name', function() {
    var name = "Tyler"

    var validator = new Validator
    expect(validator.nameValidate(name)).to.be.true
  })

  it('should not accept names shorter than two characters', function() {
    var name = "T"

    var validator = new Validator
    expect(validator.nameValidate(name)).to.be.false
  })

  it('should return specific error message if name is shorter than two characters', function() {
    var name = "T"

    var validator = new Validator
    validator.nameValidate(name)
    expect(validator.errorMessage).to.equal("Name must be longer than two characters")
  })

  it('should update errorMessage if email address is invalid', function (){
    var email = "T"

    var validator = new Validator
    validator.emailValidate(email)
    expect(validator.errorMessage).to.equal("Must enter a valid email address")
  })

  it('should only create new user if first name, last name, and valid email exist', function() {
    var userParams = {firstName: "Tyler", lastName: "Komoroske", email: 'tjkomor@clemson.edu'}

    var user = new User(userParams);
    var validator = new Validator
    expect(validator.isValid(user)).to.be.true
  })

  it('should not be created without email address', function(){
    var userParams = {firstName: "Tyler", lastName: "Komoroske"}

    var user = new User(userParams);
    var validator = new Validator

    expect(validator.isValid(user)).to.be.false
  });

  it('should not be valid without first name', function (){
    var userParams = {lastName: "Tyler", email: 'yolo@something.com'}

    var user = new User(userParams);
    var validator = new Validator

    expect(validator.isValid(user)).to.be.false
  });

  it('should not be valid without last name', function (){
    var userParams = {firstName: "Tyler", email: 'yolo@something.com'}

    var user = new User(userParams);
    var validator = new Validator

    expect(validator.isValid(user)).to.be.false
  });

  it('should not be valid if any non-alpahbetic chars are entered in first name', function (){
    var userParams = {firstName: "  B  $%2", lastName: "Komoroske", email: 'yolo@something.com'}

    var user = new User(userParams);
    var validator = new Validator

    expect(validator.isValid(user)).to.be.false;
  });

  it('should not be valid if any non-alpahbetic chars are entered in last name', function (){
    var userParams = {firstName: "Tyler", lastName: "Komo35#roske", email: 'yolo@something.com'}

    var user = new User(userParams);
    var validator = new Validator

    expect(validator.isValid(user)).to.be.false;
  });

});
