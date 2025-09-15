/**Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.
 */


function calculateNetSalary(basicSalary, benefits) {
  const personalRelief = 2400; // Monthly KSh personal relief

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate taxable income for PAYE (benefits over 5000 are taxable)
  const taxableBenefits = benefits > 5000 ? benefits - 5000 : 0;
  const taxableIncome = basicSalary + taxableBenefits;

  // PAYE calculation using 2025 bands
  let paye = 0;
  let remaining = taxableIncome;

  if (remaining <= 24000) {
    paye = remaining * 0.10;
  } else {
    paye = 24000 * 0.10;
    remaining -= 24000;

    if (remaining <= 8333) {
      paye += remaining * 0.25;
    } else {
      paye += 8333 * 0.25;
      remaining -= 8333;

      if (remaining <= 467667) {
        paye += remaining * 0.30;
      } else {
        paye += 467667 * 0.30;
        remaining -= 467667;

        if (remaining <= 300000) {
          paye += remaining * 0.325;
        } else {
          paye += 300000 * 0.325;
          remaining -= 300000;
          paye += remaining * 0.35;
        }
      }
    }
  }

  // Apply personal relief deduction
  paye = paye - personalRelief;
  if (paye < 0) paye = 0;

  // NSSF deductions calculation (2025 rates)
  // Employee pays 6% on first 8,000 (480), plus 6% on income 8,001 - 72,000 capped at 3840 max
  let nssfDeductions = 0;
  if (grossSalary <= 8000) {
    nssfDeductions = grossSalary * 0.06;
  } else if (grossSalary <= 72000) {
    nssfDeductions = 480 + ((grossSalary - 8000) * 0.06);
  } else {
    nssfDeductions = 480 + 3840; // capped max 4320 total (employee side only)
  }
  if (nssfDeductions > 4320) nssfDeductions = 4320;

  // NHIF / SHIF deductions calculation (2.75% of gross, min 300)
  let nhifDeductions = grossSalary * 0.0275;
  if (nhifDeductions < 300) nhifDeductions = 300;

  // Calculate net salary
  const netSalary = grossSalary - paye - nssfDeductions - nhifDeductions;

  return {
    basicSalary,
    benefits,
    grossSalary,
    paye: parseFloat(paye.toFixed(2)),
    nssfDeductions: parseFloat(nssfDeductions.toFixed(2)),
    nhifDeductions: parseFloat(nhifDeductions.toFixed(2)),
    netSalary: parseFloat(netSalary.toFixed(2)),
  };
}

// Example usage:
const result = calculateNetSalary(50000, 10000);
console.log(result);
