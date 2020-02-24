let obj1 = {};
let key1 = "name";
let value1 = "John";
obj1["age"] = 16;
obj1[key1] = value1;
console.log(obj1);

/* result --> obj1 = {
    name: "John",
    age: 16
}
*/

let obj2 = {};
let key11 = "level";
let key22 = "money";
let value11 = 3;
let value22 = "600k";
obj2[key11] = value11;
obj2["google"] = "yahoo";
obj2[key22] = value22;
obj2["name"] = "Cat";
console.log(obj2);
/*
obj2 = {
    "level": 3,
    "google": "yahoo",
    "money": "600k",
    "name": "Cat"
}
*/
