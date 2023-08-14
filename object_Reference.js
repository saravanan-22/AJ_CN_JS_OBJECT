let name = { name: "John" };
let age = { age: 30 };
let city = { city: "Chennai" };
let userDetails = {};
Object.assign(userDetails, name, age, city, { isAdmin: false });
//   console.log(userDetails);
age.newAge = 40;
console.log(userDetails);
console.log(age);

let userDetails = {
  name: "John Doe",
  age: 30,
};

let jack = {
  address: {
    city: "Bangalore",
    state: "Karnataka",
  },
};

Object.assign(userDetails, jack);

console.log(userDetails);
