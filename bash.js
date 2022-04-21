const commands = require("./commands");
const fs = require("fs");
// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let argumentos = data.toString().trim().split(" ");
  let cmd = argumentos.shift().trim(); // Remueve la nueva línea
  if(commands[cmd]){
  commands[cmd](argumentos)
  } else {
    process.stdout.write("You typed: " + data);
    process.stdout.write("\nprompt > ");
  }
 
});
