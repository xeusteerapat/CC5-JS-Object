let fruits = {};
let key;
let value;

while (true) {
  key = prompt("Enter fruit name");
  if (key === "stop") break;
  value = +prompt("Enter quantity");
  if (value > 1) {
    key += "s";
  }
  fruits[key] = value;
}

console.log(fruits);
