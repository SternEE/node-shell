// process.stdout.write("prompt > "); // writes out 'prompt > ' inside the terminal
// process.stdin.on("data", (data) => {
//   // we wait for a user to put in input and then executes callback func
//   if (data.toString().trim() === "pwd") {
//     //if user input is === 'pwd' then execute the code
//     const cmd = data.toString(); //takes data and converts into string
//     process.stdout.write(cmd); //write out that string to terminal
//     process.stdout.write(process.cwd()); //write out the pwd
//   } else {
//     //if the input isnt the same then write out 'command not found'
//     process.stdout.write("command not found");
//   }
// });

// process.cwd()  // = prints working directory in the terminal (Node ver)

const exportFilesFromFilePwd = require("./pwd");
exportFilesFromFilePwd();

const exportFilesFromFileLS = require("./ls");
exportFilesFromFileLS();
