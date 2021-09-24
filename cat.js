const catCommand = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");

  if (cmd[0] === "cat") {
    const fs = require("fs");
    fs.readFile(cmd[1], (err, file) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(file);
        process.stdout.write("prompt > ");
      }
    });
  }
});

module.exports.cat = catCommand;
