//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

//Prompt the user to enter marks
let marks = parseInt(prompt("Enter students marks (0 -100): "), 10);

//Validate input
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input! Please enter a number between 0 and 100.");
}
//Grade A: greater than 79
else if (marks > 79) {
  console.log("Grade: A");
}
//Grade B: 60 - 70
else if (marks >= 60) {
  console.log("Grade: B");
}
//Grade C: 49 - 59
else if (marks >= 49) {
  console.log("Grade: C");
}
//Grade D: 40 - 48
else if (marks >= 40) {
  console.log("Grade: D");
}
//Grade E: less than 40
else {
  console.log("Grade: E");
}
