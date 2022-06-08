// VARIABLES DECLARATION
taskOne = false;
taskTwo = true;
taskThree = false;

// FUNCTION DECLARATION
task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (taskOne) {
      resolve("task-1 completed");
    } else {
      reject("task-1 failed");
    }
  }, 1000);
});

task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (taskTwo) {
      resolve("task-2 completed");
    } else {
      reject("task-2 failed");
    }
  }, 2000);
});

task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (taskThree) {
      resolve("task-3 completed");
    } else {
      reject("task-3 failed");
    }
  }, 3000);
});

Promise.race([task1, task2, task3])
  .then((message) => {
    console.log("SUCESS");
    console.log(message);
  })
  .catch((message) => {
    console.log("FAILED");
    console.log(message);
  });
