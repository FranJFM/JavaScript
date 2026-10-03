const num1 = Number(prompt("Introduce el primer número:"));
const num2 = Number(prompt("Introduce el segundo número:"));

if (num1 === num2) {
  alert("Los números son iguales");
} else if (num1 > num2) {
  alert("El primer número es mayor que el segundo");
} else {
  alert("El segundo número es mayor que el primero");
}