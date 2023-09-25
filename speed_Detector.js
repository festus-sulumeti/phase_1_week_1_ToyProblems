// Description: This program calculates the number of demerit points a driver receives for driving over the speed limit.
/**\
 * This program determines how many demerit points a driver will accrue for exceeding the posted speed limit.

The readline module, which enables the program to read user input from the console, is first imported. A new readline interface object is then created, which will be used to interact with the user.

Next, a function called calculateDemeritPoints() is defined by the software. The driver's speed in kilometers per hour is the only input for this function. The speed limit is then subtracted from the motorist's speed and divided by five to determine how many demerit points the driver will earn.

The calculateDemeritPoints() function also determines if there are more than or equal to 12 demerit points. If so, a message is printed to the console by the function.
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

// Waiting for user input
rl.question("Enter the car's speed (in km/h): ", function (input) {
  const carSpeed = parseFloat(input);

  const points = calculateDemeritPoints(carSpeed);

  rl.close();
});