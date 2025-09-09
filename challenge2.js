/**Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

 */



// Function to check the speed of a car
function checkSpeed(speed) {
  // Case 1: If speed is 70 or less, print "Ok"

  if (speed <= 70) {
    console.log("Ok");
  }
  // Case 2: If speed is above 70
  else {
    // Calculate demerit points (1 point for every 5 km/s over 70)

    const points = Math.floor((speed - 70) / 5);
    // If points are more than 12, license is suspended

    if (points > 12) {
      console.log("License suspended");
    }
    // Otherwise, show total demerit points
    else {
      console.log(`points : ${points}`);
    }
  }
}

// Example tests (these run automatically when page loads)

checkSpeed(80); // Expected output: ok
checkSpeed(120); // Expected output: Points 10
checkSpeed(135); // Expected output: License suspended
