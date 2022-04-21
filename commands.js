const fs = require("fs");
const request = require("request");

function date() {
  process.stdout.write(new Date().toString());
  process.stdout.write("\nprompt > ");
}

let pwd = function () {
  process.stdout.write(process.argv.toString());
  process.stdout.write("\nprompt > ");
};

function ls() {
  fs.readdir("./", function (error, files) {
    if (error) throw EvalError;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("\nprompt > ");
  });
}

function echo(data) {
  process.stdout.write(data.join(" ") + "\n");
  process.stdout.write("\nprompt > ");
}

function cat(file) {
  fs.readFile("./" + file, "utf-8", function (error, data) {
    if (error) throw error;
    else {
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    }
  });
}

function head(file) {
  fs.readFile("./" + file, "utf-8", function (error, data) {
    if (error) throw error;
    else {
      let lineas = data.split("\n");
      let h = lineas.slice(0, 10).join("\n");
      process.stdout.write(h + "\n");
      process.stdout.write("\nprompt > ");
    }
  });
}

function tail(file) {
  fs.readFile("./" + file, "utf-8", function (error, data) {
    if (error) throw error;
    else {
      let lineas = data.split("\n");
      let h = lineas.slice(lineas.length - 10, lineas.length).join("\n");
      process.stdout.write(h + "\n");
      process.stdout.write("\nprompt > ");
    }
  });
}

function curl(url) {
  request(url.toString(), (error, response, body) => {
    if (error) throw error;
    process.stdout.write(body.toString().trim() + "\n");
    process.stdout.write("\nprompt > ");
  });
}

module.exports = {
  date,
  pwd,
  ls,
  echo,
  cat,
  head,
  tail,
  curl,
};
