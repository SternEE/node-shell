module.exports = () => {
  const fs = require("fs");
  // process.stdout.write("prompt > "); // writes out 'prompt > ' inside the terminal
  process.stdin.on("data", (data) => {
    // we wait for a user to put in input and then executes callback func
    if (data.toString().trim() === "ls") {
      //if user input is === 'ls' then execute the code
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          //if err returns true, meaning there are not files inside directory
          throw err; //then throw an error
        } else {
          //if err return false, meaning there ARE files inside directory
          process.stdout.write(files.join("\n")); //write out each files, separated by the new line
          process.stdout.write("\nprompt > "); // write out "prompt > " waiting for user to type input
        }
      });
    } else {
      //if the input isnt the same then write out 'command not found'
      process.stdout.write("command not found");
    }
  });
};

// ** comment out line 2 bc pwd files have the same line of code, will both execute "prompt > " only one file needs it
