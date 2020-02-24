// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data));

const getUsers = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();
  console.log(data);
};

getUsers();
