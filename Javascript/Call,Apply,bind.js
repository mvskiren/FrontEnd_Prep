alert("hello");
const arr = [
  { name: "kiran", age: 23 },
  { name: "pavan", age: 13 },
  { name: "ravi", age: 25 },
  { name: "sai", age: 20 }
];
console.log("hello");
for (const [key, value] of Object.entries(arr)) {
  console.log(key, value);
}
for (const [key, value] of arr.entries()) {
  console.log(key, value);
}
