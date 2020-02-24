let obj = {};
let key;
let value;
while (true) {
  key = prompt("Enter key");
  if (key === "stop") break;
  value = prompt("Enter value");
  obj[key] = value;
}

console.log(obj);
