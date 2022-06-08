// VARIABLE DECLARATION
isSucess = false;

// PROMISE DECLARATION
myPromise = new Promise((reolve, reject) => {
  setTimeout(() => {
    if (isSucess) {
      resolve("I was resolved");
    } else {
      reject("I was rejected");
    }
  }, 2000);
});

// ASYNCHRONOUS FUNCTION
async function myFunction() {
  try {
    console.log("STRAT-TRY");
    response = await myPromise;
    console.log(response);
    console.log("END-TRY"); // will never be printed if the promise return reject
  } catch (err) {
    console.log("STRAT-CATCH");
    console.log(err);
    console.log("END-CATCH");
  }
}

// DRIVER CODE
myFunction();
