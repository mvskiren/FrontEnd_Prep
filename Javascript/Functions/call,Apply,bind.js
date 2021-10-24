// we can change the this context in the fuctions with call , apply and bind
const obj1={
  name: "kiran",
  age:23
}
const obj2={
  name: "Komal",
  age:20
}
function test(greet){
  console.log(`${this.name} ${greet}`);
} 
test.call(obj2,"goodmorning"); // executes here itself
test.apply(obj2,["goodmorning"]); // executes here itself
test.bind(obj2,"goodmorning"); // cretes a copy
