let userDetails = {
  name: "John",
  displayMessage() {
    console.log(`Welcome, ${this.name}`);
    console.log(`Welcome, ${userDetails.name}`);
  },
};
userDetails.displayMessage();
