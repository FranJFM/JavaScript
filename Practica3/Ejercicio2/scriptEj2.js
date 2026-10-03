const num1 = Number(prompt("Introduce el primer número:"));
const num2 = Number(prompt("Introduce el segundo número:"));

if (isNaN(num1) || isNaN(num2) || num1 === 0 || num2 === 0) {
  alert("Error: Los valores deben ser números válidos y distintos de cero");
} else {
  if (num1 === num2) {
    alert("Son iguales");
  } else if (num1 > num2) {
    alert("El primero es mayor");
  } else {
    alert("El segundo es mayor");
  }
}