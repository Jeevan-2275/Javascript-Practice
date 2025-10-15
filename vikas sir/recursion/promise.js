// let newpromise = new Promise((resolve, reject) => {
//     reject("Promise rejected");

// });
// newpromise.catch((error) => {
//     console.log(error);
// });

// let gotJob = false;
// let mypromise = new Promise((resolve, reject) => {
//     if (gotJob) {
//         resolve("I got a job");
//     } else {
//         reject("I did not get a job");
//     }
// });
// mypromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// });


// let int= 0; 

// let newPromise = new Promise((resolve, reject) => {
//   if (int % 2 === 0) {
//     resolve("integer is even");
//   } else {
//     reject("integer is odd");
//   }
// });

// newPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));




function deliverFood(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Food is Ready");
      const success = true;  
      if (success) {
        resolve();
      } else {
        reject("Failed to deliver food");
      }
    }, time);
  });
}

function enjoyFood(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Enjoy your food");
      const success = true;
      if (success) {
        resolve();
      } else {
        reject("Could not enjoy food");
      }
    }, time);
  });
}

prepareFood(3000)
  .then(() => deliverFood(2000))
  .then(() => enjoyFood(4000))
  .then(() => console.log("All steps done"))
  .catch((error) => {
    console.log("Error:", error);
  });
