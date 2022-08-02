/* NOTES:
INTAKE: alarms as specified in the command line
- user inputs value(s) in to command line
  * what should we do this multiple inputs? Should they be proccessed all at once?
    * they will be inputted as an array because of node so we need to iterate through it
    * this means each argument will be queued at the same time
  * do we need to convert whole numbers to milliseconds?
- this starts a timer running
- the timer beeps when it's done
OUTPUT: a beep and a message when an alarm is finished

? No numbers are provided: Easy. It should just not beep at all     DONE
  and end immediately since no beeps should get scheduled.

? An input is a negative number: Ignore/skip any numbers that     DONE
  are negative. We can't schedule anything in the past.

? An input is not a number: Ignore/skip these as well, instead of     DONE
  attempting to call setTimeout with a non-number.
*/

const input = (process.argv.slice(2))

const timer = function (userInput) {
  for (const alarm of userInput) {
    if (Math.sign(Number(alarm)) !== - 1) {
      let alarmTime = Number(alarm) * 1000;
      console.log(alarmTime);
      setTimeout(() => {
        if (Number(alarm) === 1) {
          console.log(`Timer set for ${alarm} second is done!`);
          process.stdout.write('\x07');
        }
        if (Number(alarm) > 1) {
          console.log(`Timer set for ${alarm} seconds is done!`)
          process.stdout.write('\x07');
        }
      }, alarmTime);
    }
  }
};

timer(input);