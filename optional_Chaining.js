let user = {
  name: "John",
  address: {
    city: "New York",
    zipCode: 12345,
  },
};

let zipCode = user?.address?.zipCode; // returns 12345
console.log(zipCode);

let phone = user?.phoneNumber?.areaCode; // returns undefined
