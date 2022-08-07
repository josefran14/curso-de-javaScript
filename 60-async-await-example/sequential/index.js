const { taskOne, taskTwo } = require("./tasks");
//codigo paralelo
async function main() {
  try {
    console.time("Measuring time");
    const results = await Promise.all([taskOne(), taskTwo()])
    console.timeEnd("Measuring time");

    console.log("Task one returned", results[0]);
    console.log("Task two returned", results[1]);
  } catch (e) {
    console.log(e);
  }
}

main();


//codigo sequencial
// async function main() {
//   try {
//     console.time("Measuring time");
//     const valueOne = await taskOne
//     const valueTwo = await taskTwo
//     console.timeEnd("Measuring time");

//     console.log("Task one returned", taskOne);
//     console.log("Task two returned", taskTwo);
//   } catch (e) {
//     console.log(e);
//   }
// }

// main();