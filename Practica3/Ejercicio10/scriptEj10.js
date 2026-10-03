const numeroSecreto = 7; 
let intento = Number(prompt("Adivina el número secreto (entre 1 y 10):"));

while (intento !== numeroSecreto) {
  if (intento < numeroSecreto) {
    alert("El número secreto es mayor");
  } else {
    alert("El número secreto es menor");
  }
  intento = Number(prompt("Prueba de nuevo:"));
}
alert("¡Has acertado el número!");