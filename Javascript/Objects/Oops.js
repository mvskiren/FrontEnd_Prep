//Objects helps us to keep their associated functionality all bundled up on a pertineent object
// Appropiate data with appropiatie functionality

const user1 = {
  name: "kiran",
  score: 4,
  increment: function() {
    user1.score++;
  }
};
user1.increment();

/******************************************************************************************/
// Object Creations ways

// 1. Object literall
const users1 = {};
user2.name = "sai";
user2.score = 5;
user2.increment = function() {
  user2.score++;
};

// 2. Object.create(null);
// Bonus : Interesting advantage
/******************************************************************************************/
// Generating an object with function (terrible approach)
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}

const user = userCreator("kiran", 23);
const user2 = userCreator("sai", 23);
user1.increment();

//what did you spot here ?
// Well actually every time we are using the function it gives copy of the pertinent function(increment function in this scenario)
// Lets say if they were 100 of function inside the object and evertime you creates a object you will get copy of all those 100 functions
// Whether this is going to be performant in terms of memory
// We're doing copies of identical function on every single object
