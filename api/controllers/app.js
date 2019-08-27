'use strict';
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'shoppingcart' });
var weather = require('weather-js');
var moment = require('moment');
var _ = require('lodash');
var a = require('./app1.js');
var util = require('util');

module.exports = {
login,logout,dashboard,varuser
};


function login(req, res) {
  var id = req.body.id;
  var password = req.body.password;
  // const query = "SELECT id, password FROM userlogin where id = '"+id+"'";  const query = "SELECT id, password FROM userlogin where id = '"+id+"'";
  const query = "insert into userlogin(id,password) values("+ "'"+id+"','"+ password+"')";
client.execute(query)
  .then(result =>{ 
    //console.log('User with email %s', JSON.stringify(result));
    // for(var i=0;i<result.rowLength;i++){
    //   console.log(result.rows[i].id +':'+ result.rows[i].password);
    // }
    if(result.rowLength<1)
    {
      res.json('user not registered');
    }
    else{

    
    console.log(JSON.stringify(result));
    var passwordFromDb = result.rows[0].password;
    if(passwordFromDb == password){
      console.log('password matches');
      res.json('success');
    }
    else{
      res.json('error');
    }
  }
  
  });
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
//   var name = req.body.id;
//   var password = req.body.password;
//   var city = req.body.city;
//   var resLogin = {};
//   if(name ==  'ramu siripalli' && password == '12345')
//   {
// resLogin.status = 'success';
//   }
//   else{
// resLogin.status = 'error';
//   }
//   //res.json(resLogin); 
//   weather.find({search: city, degreeType: 'C'}, function(err, result) {
//     if(err) {console.log(err);}
//     else{
//       console.log(JSON.stringify(result, null, 2));
//       //resLogin.weather=result[0].forecast[2].skytextday;
//       //resLogin.message = 'success';
//       resLogin.weather=result
      
     
//       res.json(resLogin);
//     }
   
    
  // });
}
function user(req, res) {
  var id = req.body.id;
  var password = req.body.password;
  // const query = "SELECT id, password FROM userlogin where id = '"+id+"'";  const query = "SELECT id, password FROM userlogin where id = '"+id+"'";
  const query = "insert into userlogin(id,password) values("+ "'"+id+"','"+ password+"')";
client.execute(query)
  .then(result =>{ 
    console.log('User with email %s', JSON.stringify(result));
     for(var i=0;i<result.rowLength;i++){
       console.log(result.rows[i].id +':'+ result.rows[i].password);
   }
  //   if(result.rowLength<1)
  //   {
  //     res.json('user not registered');
  //   }
  //   else{

    
  //   console.log(JSON.stringify(result));
  //   var passwordFromDb = result.rows[0].password;
  //   if(passwordFromDb == password){
  //     console.log('password matches');
  //     res.json('success');
  //   }
  //   else{
  //     res.json('error');
  //   }
  // }

  });
}

function logout(req, res) {

  var status = req.body.status;
  var message = util.format('logoutting from this shopping cart, %s!', message);
  resLogout = {};
  if(status)
{
resLogout.status = 'success';
}
  res.json(resLogout);
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
  var b = _.filter(a, function(o) { return o.name.toLowerCase()=='ramu'.toLowerCase() ; });
  //var c = _.filter(b,function(i) { return  i.phone == '7888588047'});
  //var b = _.filter(a, function(o) { return o.address.toLowerCase().indexOf('hsr'.toLowerCase()) > -1 });
 
  
  res.json(b);
}


