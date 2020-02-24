const user = {
  name: "John"
};

user.name = "Pete";
// Not error, objects are pass by reference type which can change properties.
