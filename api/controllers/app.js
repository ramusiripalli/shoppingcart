'use strict';
var moment = require('moment');
var _ = require('lodash');
var a = require('./app1.js');
var util = require('util');

module.exports = {
login,logout,dashboard,varuser
};


function login(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.body.id;
  var password = req.body.password;
  var resLogin = {};
  if(name.toUpperCase() ==  'ramu siripalli'.toUpperCase() && password == '12345')
  {
resLogin.status = 'success';
  }
  else{
resLogin.status = 'error';
  }
  res.json(resLogin);
}


function logout(req, res) {

  var status = req.body.status;
  var message = util.format('logoutting from this shopping cart, %s!', message);
  resLogout = {};
  if(status)
{
resLogout.status = 'success';
}
  res.json(hello);
}


function dashboard(req, res) {
  var inputDate = req.body.inputDate;
  inputDate= moment(inputDate,"DD/MM/YYYY").format("DD/MM/YY");
  var resDashboard = {};
  resDashboard.inputDate = inputDate;
  res.json(resDashboard);
}



function varuser(req, res) {
  console.log(a);
  //var b = _.filter(a, function(o) { return o.name.toLowerCase()=='ramu'.toLowerCase() ; });
  //var c = _.filter(b,function(i) { return  i.phone == '7888588047'});
  var b = _.filter(a, function(o) { return o.address.toLowerCase().indexOf('BTM'.toLowerCase()) > -1 });
  
  res.json(b);
}
