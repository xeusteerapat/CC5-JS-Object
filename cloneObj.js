const user = {
  name: "Teerapat",
  age: 33,
  height: 173,
  weight: 69
};

const newUser = {};

for (let key in user) {
  newUser[key] = user[key];
}

newUser.name = "Mesut";
newUser.height = 184;
newUser.weight = 78;
newUser.age = 31;

console.log(newUser);
console.log(user);
