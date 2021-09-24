const curlCommand = process.stdin.on("data", (data) => {
  const curlPath = data.toString().trim().split(" ");
  process.stdout.write(curlPath);

  if (curlPath[0] === "curl") {
    const request = require("request");
    request(curlPath[1], (err, resp, body) => {
      if (err) {
        throw err;
        // } else if (resp) {
        //   process.stdout.write(resp && resp.statusCode);
      } else {
        process.stdout.write(body);
        process.stdout.write(resp && resp.statusCode);
        // process.stdout.write("prompt > ");
      }
    });
  }
});

module.exports.curl = curlCommand;
