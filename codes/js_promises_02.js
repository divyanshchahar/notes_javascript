// VARIABLES DECLARATION
taskOne = true;
taskTwo = true;
taskThree = false;

// FUNCTION DECLARATION
task1 = new Promise((resolve, reject) => {
  if (taskOne) {
    resolve("task-1 completed");
  } else {
    reject("task-1 failed");
  }
});

task2 = new Promise((resolve, reject) => {
  if (taskTwo) {
    resolve("task-2 completed");
  } else {
    reject("task-2 failed");
  }
});

task3 = new Promise((resolve, reject) => {
  if (taskThree) {
    resolve("task-3 completed");
  } else {
    reject("task-3 failed");
  }
});

// DRIVER CODE
Promise.all([task1, task2, task3])
  .then((messages) => {
    console.log("SUCESS");
    console.log(messages);
  })
  .catch((messages) => {
    console.log("FAILED");
    console.log(messages);
  });

// if all promises resolve, it will go in the catch and all messages will be printed.
// If any promise rejects, it will go in the catch and only the last message will be prited
