function esNotaValida(entrada) {
  if (entrada === null || entrada.trim() === "") {
    return false;
  }
  const nota = Number(entrada);
  if (isNaN(nota)) {
    return false;
  }
  return nota >= 0 && nota <= 10;
}

function clasificarNota(nota) {
  if (nota < 5) {
    return "suspenso";
  } else if (nota < 7) {
    return "aprobado";
  } else if (nota < 9) {
    return "notable";
  } else {
    return "sobresaliente";
  }
}

function calcularMedia(suma, cantidad) {
  return suma / cantidad;
}

let cantidad = 0;
let suma = 0;
let maxima = 0;
let minima = 10;
let terminar = false;

while (terminar === false) {
  const entrada = prompt("Introduce una nota de 0 a 10, -1 para salir:");
  if (entrada !== null && entrada.trim() === "-1") {
    terminar = true;
  } else if (esNotaValida(entrada)) {
    const nota = Number(entrada);
    cantidad++;
    suma += nota;
    if (nota > maxima) {
      maxima = nota;
    }
    if (nota < minima) {
      minima = nota;
    }
    alert("Nota " + nota + ": " + clasificarNota(nota));
  } else {
    alert("Nota no válida, vuelve a intentarlo");
  }
}

if (cantidad === 0) {
  console.log("No se ha introducido ninguna nota");
} else {
  const media = calcularMedia(suma, cantidad);
  console.log("Notas introducidas: " + cantidad);
  console.log("Media: " + media.toFixed(2));
  console.log("Nota máxima: " + maxima);
  console.log("Nota mínima: " + minima);
}