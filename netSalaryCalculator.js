/*
This program calculates the net salary of an employee, taking into account a 20% income tax deduction.

The program first imports the readline module, which allows it to read user input from the console. It then creates a new readline interface object, which will be used to communicate with the user.

Next, the program defines a function called calculateNetSalary(). This function takes a single argument, the employee's salary in number. It then calculates the net salary by subtracting the income tax deduction from the employee's salary.

The calculateNetSalary() function then prints a message to the console saying what the employee's net salary is.

Finally, the program prompts the user for the employee's salary. It then converts the user's input to a number and calls the calculateNetSalary() function to calculate the employee's net salary. The program then prints the employee's net salary to the console and closes the readline interface object.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNetSalary(input) {
    const employeeSalary = parseFloat(input);

    if (isNaN(employeeSalary) || employeeSalary < 0) {
        console.log("Please enter a valid number.");
    } else {
        const netSalary = employeeSalary - (employeeSalary * 0.2);
        console.log(`The employee's net salary is ${netSalary}`);
    }

    rl.close();
}

// Waiting for user input
rl.question("Enter the employee's salary: ", calculateNetSalary);