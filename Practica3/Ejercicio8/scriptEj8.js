const palabra = prompt("Introduce una palabra:");
let contadorVocales = 0;

for (const letra of palabra) {
  switch (letra.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      contadorVocales++;
      break;
  }
}

alert("La palabra tiene " + contadorVocales + " vocales.");