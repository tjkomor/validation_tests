"use strict";

var expect = require('chai').expect;
var User = require('../user')

describe('User', function() {
  it('user can only be created with first name, last name, and valid email', function() {
    var userParams = {firstName: "Tyler", lastName: "Komoroske, ", email: 'tjkomor@clemson.edu'}

    var user = new User(userParams);

    expect(user.userValidator(user)).to.be.true
  })

  it('user will not be created without valid params', function(){
    var userParams = {firstName: "Tyler", lastName: "Komoroske"}

    var user = new User(userParams);

    expect(user.userValidator()).to.be.false
  });

  it('user will not be valid without valid email address', function (){
    var userParams = {firstName: "Tyler", lastName: "Komoroske", email: 'yolo'}

    var user = new User(userParams);

    expect(user.userValidator()).to.be.false
  });

  it('user will not be valid without valid first name', function (){
    var userParams = {lastName: "Komoroske", email: 'yolo@something.com'}

    var user = new User(userParams);

    expect(user.userValidator()).to.be.false
  });

  it('user will not be valid without last name', function (){
    var userParams = {firstName: "Tyler", email: 'yolo@something.com'}

    var user = new User(userParams);

    expect(user.userValidator()).to.be.false
  });
});
