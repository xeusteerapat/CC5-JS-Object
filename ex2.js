function isEmpty(obj) {
  for (let i in obj) {
    if (i) return true;
  }
  return false;
}

let a = {};
console.log(isEmpty(a));
