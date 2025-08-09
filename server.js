
var _=require('lodash')
// console.log("Server is running");
// function add(a,b)
// {
//     return a+b;
// }
// var result=add(2,5)
// console.log(result)

// var sub=function(a,b){
//     return a-b;
// }
// var resut=sub(3,5)
// console.log(resut)

// var mul= (a,b)=>{return a*b;}
// var resut=mul(3,5)
// console.log(resut)

// var div= (a,b)=> a/b
// var result=div(3,5)
// console.log(result);


// (function(){
//     console.log("prince");
// })();

// function callback(){
//      console.log("callback function");
// }
// const mul1= function(c,d,callback){
//      var result=c*d;
//      console.log(result);
//      callback();
// }
// mul1(3,5,callback);

// mul1(3,5,()=> console.log("inline way of callback"));


// var fs= require("fs")
// var os=require("os")
// var user=os.userInfo();
// console.log(user);
// console.log(user.username)
// fs.appendFile("hello.txt","Hi"+user.usrname,()=>{
//     console.log("file is created")
// })
// console.log(os)

const  notes=require('./note.js')
console.log("server file is available")

var age = notes.age;
console.log("age is"+ age)

var mulresult = notes.mul(3,4);
console.log("mul is: "+ mulresult)

var data=["person","person",1,2,3,4,2,3,2,4,1];
var filter=_.uniq(data)
console.log(filter);

console.log(_.isString("prince"))
console.log(_.isString(3))


// console.log(_.isString("prince"))
console.log(_.isNumber(3))
console.log(_.isNumber("prince"))
console.log(_.isNumber("prince"))


//after next updation