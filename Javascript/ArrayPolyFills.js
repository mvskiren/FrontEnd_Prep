// Polyfills
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

/******************************************************************************************/
// 1.  PolyFill for forEach()
alert("hi");
if (true || !Array.prototype.forEach) {
  Array.prototype.myForEach = function(callback) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    for (var index = 0; index < this.length; index++) {
      callback(this[index], index, this);
    }
  };
}
/******************************************************************************************/

// 2. PolyFill for Filter()

if (true || !Array.prototype.filter) {
  Array.prototype.myFilter = function(callback) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    filteredArray = [];
    for (var index = 0; index < this.length; index++) {
      if (callback(this[index], index, this)) {
        filteredArray.push(this[index]);
      }
      return filteredArray;
    }
  };
}
/******************************************************************************************/

// 3. PolyFill for Every()

if (true || !Array.prototype.every) {
  Array.prototype.myEvery = function(callback) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    var count = 0;
    for (var index = 0; index < this.length; index++) {
      if (callback(this[index])) {
        ++count;
      }
    }
    return count === this.length;
  };
}
/******************************************************************************************/

// 4. PolyFill for Some() - Atleast one item should be return true

if (true || !Array.prototype.some) {
  Array.prototype.mySome = function(callback) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    var flag = false;
    for (var index = 0; index < this.length; index++) {
      if (callback(this[index], index, this)) {
        flag = true;
        break;
      }
    }
    return flag;
  };
}
/******************************************************************************************/

// 5. PolyFill for Find() - Returns the first truth value in array as per the condition

if (true || !Array.prototype.find) {
  Array.prototype.myFind = function(callback) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    var flag = false;
    for (var index = 0; index < this.length; index++) {
      if (callback(this[index], index, this)) {
        return this[index];
      }
    }
    return -1;
  };
}
/******************************************************************************************/

// 6. PolyFill for Find() - Returns the first truth value in array as per the condition

if (true || !Array.prototype.map) {
  Array.prototype.myMap = function(callback) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    var mappedArray = [];
    for (var index = 0; index < this.length; index++) {
      mappedArray.push(callback(this[index], index, this));
    }
    return mappedArray;
  };
}

/******************************************************************************************/

// 7. PolyFill for reduce () - Returns the first truth value in array as per the condition

if (true || !Array.prototype.reduce) {
  Array.prototype.myReduce = function(callback, initialValue) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    var start = 0;
    var accumulator;
    if (initialValue) {
      accumulator = initialValue;
    } else {
      accumulator = this[0];
      start = 1;
    }
    for (var index = start; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }
    return accumulator;
  };
}
/*****************************************************************************************/

// 8. PolyFill for Flat () - Returns the first truth value in array as per the condition

if (true || !Array.prototype.flat) {
  Array.prototype.myFlat = function(callback) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    var arr = this;
    output = [];
    (function flattening(arr) {
      for (var i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (Array.isArray(currentElement)) {
          flattening(currentElement);
        } else {
          output.push(currentElement);
        }
      }
    })();
    return output;
  };
}
/*****************************************************************************************/
//Copied
function flat() {
  var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);

  return depth
    ? Array.prototype.reduce.call(
        this,
        function(acc, cur) {
          if (Array.isArray(cur)) {
            acc.push.apply(acc, flat.call(cur, depth - 1));
          } else {
            acc.push(cur);
          }

          return acc;
        },
        []
      )
    : Array.prototype.slice.call(this);
}
/*****************************************************************************************/
alert("Hello");
const arr = [2, 4, 2, -1, 2, 17, -109];

Array.prototype.myEven = function() {
  var output = [];
  for (var index = 0; index < this.length; index++) {
    if (this[index] % 2 === 0) {
      output.push(this[index]);
    }
  }
  return output;
};
