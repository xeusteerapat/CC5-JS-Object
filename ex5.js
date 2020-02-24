let menu = {
  width: 200,
  height: 300,
  title: "My Menu",
  money: 5000
};

function multipleNumeric(obj, times) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= times;
    }
  }
  return obj;
}
console.log(multipleNumeric(menu, 3));
