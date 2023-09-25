# Toy Problem Challenges

## Challenge 1: Student Grade Generator

This program calculates the grade based on the input student marks. The grade ranges are as follows:
- A: > 79
- B: 60 to 79
- C: 50 to 59
- D: 40 to 49
- E: less than 40

## Challenge 2: Speed Detector

This program takes the speed of a car as input and checks if it's within the speed limit. If it's less than 70, it prints "Ok." If the speed is above 70, it calculates demerit points and prints the total points. If the driver accumulates more than 12 points, the program prints "License suspended."

## Challenge 3: Net Salary Calculator

The program is meant to calculate an individual's net salary, that is based on their basic salary and benefits. It calculates payee (tax), NHIF deductions, NSSF deductions, gross salary, and net salary.


## Need to work on

## 1. Net Salary Calculator

A) The'readline' module is imported, providing a user interface for reading input from the command line.

b) It develops a readline interface (rl) that enables command-line communication between the application and the user. 
   - This is demonstrated by the fact that it sets the streams 'process.stdin' for input and 'process.stdout' for output. This implies that it will display output to the console and read user input from the console.

b) The function 'calculateNetSalary' is defined in the code.
c) The 'rl.question' method is used inside 'calculateNetSalary' to prompt the user to enter the employee's pay. A callback function is offered in addition to the question being shown as a prompt.



## 2. speed_Detector

The'readline' module, which offers an interface for reading input from the command line, will be imported first.

b) It develops a readline interface (rl) that enables command-line communication between the application and the user. It establishes 'process.stdin' as the input stream and 'process.stdout' as the output stream, allowing the program to read user input from the console and show output to the console.



## 3. student_Grade_Generator

The'readline' module, which offers an interface for reading input from the command line, is imported first.

It develops a readline interface (rl) that enables command-line communication between the program and the user. It establishes 'process.stdin' as the input stream and 'process.stdout' as the output stream, allowing the program to read user input from the console and show output to the console.

'calculateGrade' is a function that is defined in the code.

The user is prompted to enter the student's grades using the function 'calculateGrade', which uses 'rl.question' and specifies that the acceptable range is between 0 and 100. The callback function receives the user's input as the 'input' parameter.

It transforms the user's input into a floating-point number inside the callback method for "rl.question."

## Prerequistes
1. Any Editor (Best to use will be vs code)
2. Any web browser with the latest ES version
3. Quokka(OPtional)
4. Use code runner

## Languages and technology used
1. JavaScript
2. Install the readline node module
3. install node 

## Steps to run the project
1. Clone the repository
2. Extract all the files
3. Open the file in vsCode
4. run the files in the browser or use the quokkka extennsion in vscode both work the same way