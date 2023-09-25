// Description: This program calculates the number of demerit points a driver receives for driving over the speed limit.
/*
This program calculates the number of demerit points a driver receives for driving over the speed limit.

The program first imports the readline module, which allows it to read user input from the console. It then creates a new readline interface object, which will be used to communicate with the user.

Next, the program defines a function called calculateDemeritPoints(). This function takes a single argument, the driver's speed in kilometers per hour. It then calculates the number of demerit points the driver receives by subtracting the speed limit from the driver's speed and dividing by 5.

The calculateDemeritPoints() function also checks if the number of demerit points is greater than or equal to 12. If it is, the function prints a message to the console saying that the driver's license is suspended. Otherwise, the function prints a message to the console saying how many demerit points the driver has received.

Finally, the program prompts the user for their speed. It then converts the user's input to a number and calls the calculateDemeritPoints() function to calculate the number of demerit points the driver has received. The program then prints the number of demerit points to the console and closes the readline interface object.
*/
// Importing the readline module
const readline = require('readline');

// Creating a new readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
    return 0; // No demerit points
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints >= 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }

    return demeritPoints;
  }
}

rl.question("Enter the car's speed (in km/h): ", function (input) {
  const carSpeed = parseFloat(input);

  const points = calculateDemeritPoints(carSpeed);

  rl.close();
});