var name = " Kapop";
var weight = 70;
var height = 1.56;

var bmi = weight / height ** 2;
console.log(bmi);

var status;
if (bmi < 18.9) {
  status = "Underweight";
} else if (bmi > 18.9 && bmi <= 22.9) {
  status = "Normal";
} else if (bmi > 22.9 && bmi <= 24.9) {
  status = "Overweight";
} else if (bmi > 24.9 && bmi <= 29.9) {
  status = "Obese";
} else {
  status = "Extremely Obese";
}
console.log(
  "My name is " + name + " BMI is " + bmi.toFixed(2) + " = " + status
);
