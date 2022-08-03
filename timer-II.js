 const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
 stdin.setRawMode(true);
 stdin.setEncoding('utf8');

 console.log(
`1-9: set a timer for 1-9 seconds
  b: beep`);
 console.log(`Please use 'ctrl+c' to quit.`);
 console.log(`----------------------------`);

 const timer = function(userInput) {
  for (const alarm of userInput) {
    if (Math.sign(Number(alarm)) !== - 1) {
      let alarmTime = Number(alarm) * 1000;
      console.log(`Setting timer for ${userInput} second(s)...`);
      setTimeout(() => {
        if (Number(alarm) === 1) {
          console.log(`Timer set for ${alarm} second is done!`);
          process.stdout.write('\x07');
        }
        if (Number(alarm) > 1) {
          console.log(`Timer set for ${alarm} seconds is done!`);
          process.stdout.write('\x07');
        }
      }, alarmTime);
    }
  }
};

const beepLog = function() {
  setTimeout(() => {
    process.stdout.write('\r     \r')
  }, 300);
}

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("\rThanks for using me, ciao!\n");
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07');
    process.stdout.write('\rbeep!')
    beepLog();
  }
  if (key >= 1 && key <= 9) {
    timer(key);
  }
});

/*
- The user can press b and it should beep right away  //done
- The user can input any number from 1 to 9 and it should
  immediately output "setting timer for x seconds...", and
  beep after that number of seconds has passed
- The user can use ctrl + c to exit the program at which point the program 
  should say "Thanks for using me, ciao!" before terminating
*/