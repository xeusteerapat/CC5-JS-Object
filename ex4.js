let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

function sum(obj) {
  let ans = 0;
  for (let i in obj) {
    ans += obj[i];
  }
  return ans;
}

console.log(sum(salaries));
b = Object.values(salaries).reduce((acc, current) => acc + current);
console.log(b);
