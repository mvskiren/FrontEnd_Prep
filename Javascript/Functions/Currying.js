// sum of n arguments functions

let sum = function (x){
  return function (y){
    if(y || y===0) return sum(x+y);
    return x;
  }
}
console.log(sum(20)(1)(2)(1)(1)(0)()); 
