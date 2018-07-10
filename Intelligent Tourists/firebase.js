var ref;
var result;
var fb;
var database;
var Uname="sai";
var pass="ram";
var un;
var p;

function setup()
{
  var config = {
    apiKey: "AIzaSyDOEG_jnFimbkGEDvu6tY7wQrqCD8WjUPc",
    authDomain: "intelligent-tourists.firebaseapp.com",
    databaseURL: "https://intelligent-tourists.firebaseio.com",
    projectId: "intelligent-tourists",
    storageBucket: "intelligent-tourists.appspot.com",
    messagingSenderId: "1056025854442"
  };
  firebase.initializeApp(config);
  fb=firebase.database();
  console.log(firebase);
  database = firebase.database();  
}

function Register(){
  ref=database.ref('profile');
  Uname=document.getElementById("br1").value;
  pass=document.getElementById("br2").value;
  var data={
    UserName:Uname,
    Password:pass
  }
  result=ref.push(data,dataSent);
  console.log(result.key);
  function dataSent(err,status){
    console.log(status);
  }
  window.location.href="home.html";
}

function checkLogin(){
  
  ref=database.ref('profile');
  ref.on('value',check,error);
  window.location.href="home.html";
}
function check(data){
  var d=data.val();
  var keys=Object.keys(d);
  //var un=Object.UserName(keys);
  //console.log(un);
  //Uname=;
  //pass=;
  Uname=document.getElementById("br1").value;
  pass=document.getElementById("br2").value;
  for(var i=0;i<keys.length;i++){
    var key=keys[i];
    var ref = firebase.database().ref('profile/'+key+'/UserName');
    ref.on("value", function(snapshot) {
      un=snapshot.val();
    },function (error) {
      console.log("Error: " + error.code);
    });
    var ref = firebase.database().ref('profile/'+key+'/Password');
    ref.on("value", function(snapshot) {
      p=snapshot.val();
    },function (error) {
      console.log("Error: " + error.code);
    });
    if(un==Uname && p==pass){
      console.log("granted");
    }
  }

    /*
  for(var i=0;i<keys.length;i++){
    var key=keys[i];
    var un=database.ref('profile/'+key+'/UserName');
    //console.log(un);
    


    /*
    if(ref.key.UserName==Uname && ref.key.Password==pass){

    }*/
}

function gotData(data){
  console.log(data);
}
function error(err){
  //console.log(err);
}


    /*<a href="login.html">
    
    
<meta http-equiv="refresh" content="15; url=login.html">
    */