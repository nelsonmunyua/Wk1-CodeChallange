# JavaScript Coding Challenges

#### Date: 2025/09/09  
#### By *Nelson Munyua*  

## Description
This project contains solutions to a set of beginner-friendly JavaScript challenges.  
Each challenge focuses on basic programming concepts such as conditional logic, functions, and user interaction in the browser console.  

The challenges include:  
1. **Student Grade Generator** – Calculates grades based on student marks.  
2. **Speed Detector** – Detects speed violations and calculates demerit points.  
3. **Net Salary Calculator** – Calculates net salary in Kenya for 2025 after statutory deductions.  

---

## Challenges

### 1. Student Grade Generator
- Prompts the user to input student marks between `0 and 100`.  
- Outputs the grade according to the following rules:  
  - A: marks > 79  
  - B: 60–79  
  - C: 49–59  
  - D: 40–48  
  - E: less than 40  

#### Example
```js
Enter student marks (0 - 100): 67
Grade: B
2. Speed Detector
Takes the speed of a car as input.

If the speed is less than or equal to 70, it prints Ok.

For every 5 km/s above the speed limit (70), the driver gets 1 demerit point.

If the driver accumulates more than 12 points, it prints License suspended.

Example
js
Copy code
checkSpeed(65);   // Ok
checkSpeed(80);   // Points: 2
checkSpeed(135);  // License suspended
3. Net Salary Calculator
Takes basic salary and benefits as input.

Calculates:

Gross salary

PAYE (Income Tax) using 2025 tax bands

NSSF deductions

NHIF/SHIF deductions

Net salary (final take-home pay)

Example
js
Copy code
calculateNetSalary(50000, 10000);
Output
js
Copy code
{
  basicSalary: 50000,
  benefits: 10000,
  grossSalary: 60000,
  paye: 11167.25,
  nssfDeductions: 4320,
  nhifDeductions: 1650,
  netSalary: 42862.75
}
Installation
To download the project to your local machine:

bash
Copy code
git clone https://github.com/nelsonmunyua/Wk1-CodeChallange
Installation Requirements
Git

A modern web browser

Usage
Open index.html in your browser.

Open the console (F12 → Console).

Run the functions directly:

calculateGrade(marks)

checkSpeed(speed)

calculateNetSalary(basicSalary, benefits)

Technologies used
HTML

JavaScript

GitHub

Support and contact details
For inquiries, reach out via:
github.com/nelsonmunyua

License
The content of this site is licensed under the MIT license.
Copyright (c) 2025.


