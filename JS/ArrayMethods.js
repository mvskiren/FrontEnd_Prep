const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] }
];

const accounts = [
  {
    owner: "Jonas Schmedtmann",
    deposits: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    status: "NEW" //unread
  },

  {
    owner: "sarath",
    deposits: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    status: "NEW"
  },

  {
    owner: "Steven Thomas Williams",
    deposits: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    status: "NEW"
  },

  {
    owner: "sarath",
    deposits: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    status: "URGENT"
  }
];

for (let i = 0; i < accounts.length; i++) {
  console.log(accounts[i].owner);
}

for (const [i, item] of accounts.entries()) {
  console.log(item.owner + " " + i);
}
//ES6 - ForEach(item, index, array)
accounts.forEach((item, i) => console.log(item.owner + "" + i));
// Limitations: break or continue , await

const deposits1000 = accounts
  .flatMap(account => account.deposits)
  .filter(item => item >= 1000).length;

// console.log(deposits1000);

const countUnreadMessages = accounts.reduce(
  (count, item) => (item.status === "NEW" || "URGENT" ? ++count : count),
  0
);
// console.log(countUnread);

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const test = accounts
  .map(item => item.country)
  .slice()
  .sort();

const res = accounts.filter((item, i) => item.owner === "sarath");
const mapss = accounts.map(item => item.owner + "hi");
console.log(mapss);

function myFilter() {
  res = [];
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].owner === "sarath") {
      res.push(accounts[i]);
    }
  }
  return res;
}

const arr22 = [1, 2, 3];

const totSum = arr22.reduce((sum, item) => (sum += item > 0 ? item : 0));
console.log(totSum);
