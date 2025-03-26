

// Exercice 1: VAT calculation
function calculateVAT() {
  let rawPrice = parseFloat(prompt("Enter the raw price: "));
  let finalPrice = rawPrice * 1.185;
  console.log(`Final price with VAT: ${finalPrice.toFixed(2)}`);
}
calculateVAT();
// Exercice 2: Multiplication table
function multiplicationTable() {
  let number;
  do {
    number = parseInt(prompt("Enter a number between 2 and 9: "));
  } while (number < 2 || number > 9);

  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
multiplicationTable();

// Exercice 3: Array operations
const values = [3, 11, 7, 2, 9, 10];
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
function averageArray(arr) {
  return sumArray(arr) / arr.length;
}
function minMaxArray(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}

console.log(`Sum of array: ${sumArray(values)}`);
console.log(`Average of array: ${averageArray(values)}`);
console.log(`Min and Max:`, minMaxArray(values));

// Exercice 4: Temperature conversion
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

let celsius = parseFloat(prompt("Enter temperature in Celsius: "));
console.log(`${celsius}°C = ${celsiusToFahrenheit(celsius)}°F`);

let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));
console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit)}°C`);

// Exercice 5: String reversal
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("ramadan"));

// Exercice 6: Vowel counting
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
}

console.log(countVowels("salut"));
