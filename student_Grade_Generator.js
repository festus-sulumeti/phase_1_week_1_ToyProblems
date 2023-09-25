/**
 * This program determines a student's grade based on their marks.

The readline module, which enables the program to read user input from the console, is first imported. A new readline interface object is then created, which will be used to interact with the user.

Next, a function called calculateGrade() is defined by the application.
 */

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade() {
  rl.question("Enter student's marks (between 0 and 100): ", function(input) {
    const userInput = parseFloat(input);

    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
      console.log("Please enter a valid number between 0 and 100.");
    } else {
      let studentGrade;
      if (userInput > 79) {
        studentGrade = 'A';
      } else if (userInput >= 60) {
        studentGrade = 'B';
      } else if (userInput >= 50) {
        studentGrade = 'C';
      } else if (userInput >= 40) {
        studentGrade = 'D';
      } else {
        studentGrade = 'E';
      }

      console.log(` The Student's grade: ${studentGrade}`);
    }
    
    rl.close();
  });
}


calculateGrade();
