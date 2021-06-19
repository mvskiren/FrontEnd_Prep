// Memory inefficient approach - (Underlying concept)

//1. Creating a object with naive approach

const user1 = {
  name: "kiran",
  score: 4,
  increment: function() {
    user1.score++;
  }
};
// user1.increment();

// 2 . With object literall
const users1 = {};
user2.name = "sai";
user2.score = 5;
user2.increment = function() {
  user2.score++;
};

/**************************************************************/
// Generating a object through a function
// Memory inefficient approach - (Underlying concept)

function UserCreator(name, age) {
  const newUser = {};
  newUser.name = name;
  newUser.age = age;
  newUser.increment = function() {
    newUser.score++;
  };
  newUser.login = function() {
    console.log("hi you're logged In");
  };
  return newUser;
}
const user1 = userCreator("kiran", 23);
const user2 = userCreator("sai", 23);
user1.increment();
// What did you spot here - ?
// Well actually every time we are using the function it gives copy of the pertinent function(increment function in this scenario)
// Lets say if they were 100 of function inside the object and evertime you creates a object you will get copy of all those 100 functions
// Whether this is going to be performant in terms of memory
// We're doing copies of identical function on every single object

/****************************************************************************************************************************/

// Shared object through prototypical nature

function userCreator(name, age) {
  const newUser = Object.create(functionStore);
  newUser.name = name;
  newUser.age = age;
  return newUser;
}

const functionStore = {
  increment: function() {
    console.log(this);
    this.age++;
  },
  login: function() {
    console.log("hi you're logged In");
  }
};
const user1 = userCreator("kiran", 23);
const user2 = userCreator("sai", 23);
user1.increment();
/****************************************************************************************************************************/

function UserCreator(name, age) {
  this.name = name;
  this.age = age;
}
UserCreator.prototype.sayName = function() {
  console.log(`hi there ${this.name}`);
};
UserCreator.prototype.age = function() {
  console.log(`hi thereb your age is ${this.age}`);
};
const sai = new UserCreator("Kiran", 23);
console.log(sai);
/****************************************************************************************************************************/
class UserCreator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName = function() {
    console.log(`Hi your name is ${this.name}`);
  };
  showAge = function() {
    console.log(`Hi your age is ${this.age}`);
  };
}
class paidUserCreator extends UserCreator {
  constructor(name, age, walletBalance) {
    super(name, age);
    this.walletBalance = walletBalance;
  }
  showWalletBalance = function() {
    console.log(`Hi your balance is ${this.walletBalance}`);
  };
}
const sai = new paidUserCreator("kiran", 23, 234);
const sai2 = new UserCreator("kiran", 23, 234);
sai.sayName();
console.log(sai.__proto__ === paidUserCreator.prototype);
console.log(sai2);
