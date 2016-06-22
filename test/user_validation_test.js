"use strict";

var expect = require('chai').expect;
var User = require('../user')

describe('User', function() {
  it('user can only be created with first name, last name, and valid email', function() {
    var userParams = {firstName: "Tyler", lastName: "Komoroske", email: 'tjkomor@clemson.edu'}

    var user = new User(userParams);

    expect(user.userValidator(user)).to.be.true
  })

  it('user will not be created without valid params', function(){
    var userParams = {firstName: "Tyler", lastName: "Komoroske"}

    var user = new User(userParams);

    expect(user.userValidator()).to.be.false
  });

  it('user will not be valid without valid email address and returns error', function (){
    var userParams = {firstName: "Tyler", lastName: "Komoroske", email: 'yolo@'}

    var user = new User(userParams);
    expect(user.userValidator()).to.be.false
    expect(user.errorMessage).to.equal("Must enter a valid email address")

    var userParams2 = {firstName: "Tyler", lastName: "Komoroske", email: 'yolo@something.edu'}

    var user2 = new User(userParams2);
    expect(user2.userValidator()).to.be.true
  });

  it('user will not be valid without valid first name and returns error', function (){
    var userParams = {lastName: "Komoroske", email: 'yolo@somet hing.com'}

    var user = new User(userParams);

    expect(user.userValidator()).to.be.false
    expect(user.errorMessage).to.equal("Must enter valid alpahbetic charcaters")

  });

  it('user will not be valid without last name', function (){
    var userParams = {firstName: "Tyler", email: 'yolo@something.com'}

    var user = new User(userParams);

    expect(user.userValidator()).to.be.false
  });

  it('user will not be valid if any non-alpahbetic chars are enetered', function (){
    var userParams = {firstName: "  B  $%2", lastName: "Komoroske" ,email: 'yolo@something.com'}

    var user = new User(userParams);

    expect(user.userValidator()).to.be.false

    var userParams = {firstName: "Tyler", lastName: "Komo5$roske" ,email: 'yolo@something.com'}
    var user = new User(userParams);

    expect(user.userValidator()).to.be.false
  });

});
