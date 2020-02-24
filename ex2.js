function isEmpty(obj) {
  for (let key in obj) {
    if (key) return false;
  }
  return true;
}

let a = {};
console.log(isEmpty(a));

// another way to check
function isEmpty2(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty2(a));
