
// sum(10)(5)
function sum(x) {

    return function(y) {
        return x + y;
    };
}

// Emulating private methods and variables with closures

var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.value());

// SetTimeout method as a closure

function closure() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 2000);
  console.log('hello');
}

closure();
// SetTimeout as a clousre inside for loop...
var:
function closure() {
  for(var i=1; i<5;i++){
    setTimeout(()=>{
      console.log(i);
    },i*1000);
  }
}
closure();
let:
function closure() {
  for(let i=1; i<5;i++){
    setTimeout(()=>{
      console.log(i);
    },i*1000);
  }
}
closure();

//with iffe or wrapper over another function ....

function closure() {
  for(var i=1; i<=5;i++){
    (function(x){
    setTimeout(()=>{
      console.log(x);
    },x*1000);
  })(i);
  }
}
closure();






