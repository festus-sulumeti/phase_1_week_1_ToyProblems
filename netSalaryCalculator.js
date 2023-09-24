const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNetSalary() {
    rl.question("Enter the employee's salary: ", function (input) {
        const employeeSalary = parseFloat(input);

        if (isNaN(employeeSalary) || employeeSalary < 0) {
            console.log("Please enter a valid number.");
        } else {
            const netSalary = employeeSalary - (employeeSalary * 0.2);
            console.log(`The employee's net salary is ${netSalary}`);
        }

        rl.close();
    });
}

calculateNetSalary();

