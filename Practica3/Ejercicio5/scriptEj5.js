let suma = 0;
let contador = 0;
let numero = Number(prompt("Introduce un número (negativo para terminar):"));

while (numero >= 0) {
  suma += numero;
  contador++;
  numero = Number(prompt("Introduce otro número (negativo para terminar):"));
}

if (contador > 0) {
  const media = suma / contador;
  alert("Suma: " + suma + "\nMedia: " + media);
} else {
  alert("No se introdujeron números válidos.");
}