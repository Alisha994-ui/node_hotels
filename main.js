var a=4;
var b=2;
var ans=a+b;
console.log(ans);

console.log("my ans is " ,ans)

const name='alisha';
console.log(name)
console.log(typeof name)

const cars = ["1","2","3"];
console.log(cars)
console.log(cars[2])

const person={
    name: "Alisha",
    age : 12,
    hobbies:["A","B","C"]
}
console.log(person.hobbies)

const result = cars.filter(checkcar)
function checkcar(car){
    return car<=2
}
console.log(result)

var prompt = require('prompt-sync')()
var age=prompt("Enter your age : ")
if (age<= 18){
    console.log("Your age is correct")
}
else{
    console.log("Your age is not correct")

}