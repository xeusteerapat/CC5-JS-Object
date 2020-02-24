let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multipleNumeric(obj, times) {
  for (let i in obj) {
    if (isNaN(obj[i])) {
      continue;
    }
    obj[i] *= times;
  }
  return obj;
}
console.log(multipleNumeric(menu, 4));
