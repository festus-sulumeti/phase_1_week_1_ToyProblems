
const readline = require('readline');
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