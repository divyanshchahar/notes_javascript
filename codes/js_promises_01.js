p = new Promise((resolve, reject) => {
  var a = 2;
  if (a >= 2) {
    resolve("Sucess", 1);
  } else {
    reject("Failed", 2);
  }
});

p.then((message) => {
  console.log("I am in the THEN");
  console.log(message);
}).catch((message) => {
  console.log("I am in the CATCH");
  console.log(message);
});

// note: resolve and reject will always return a single parameter. If you wish to return mltiple parameter use objectas
