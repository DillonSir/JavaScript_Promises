console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class API {
  static getUser(id) {
    return Boolean(Math.round(Math.random()));
  }
}
let promise = new Promise((resolve, reject) => {
  let userLeft = API.getUser(76);
  if (userLeft) {
    reject(new Error("User left stream"));
  } else {
    resolve({ msg: "Thumbs up and Subscribe!" });
  }
});

promise
  .then((result) => {
    console.log(result.msg);
  })
  .catch((err) => {
    console.error(err);
  });
