function generarNumeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

function intentosPorNivel(nivel) {
  switch (nivel) {
    case "1":
      return 10;
    case "2":
      return 7;
    case "3":
      return 5;
  }
}

function esIntentoValido(entrada) {
  if (entrada === null || entrada.trim() === "") {
    return false;
  }
  const numero = Number(entrada);
  if (isNaN(numero) || !Number.isInteger(numero)) {
    return false;
  }
  return numero >= 1 && numero <= 100;
}

function compararIntento(intento, secreto) {
  if (intento < secreto) {
    return "mayor";
  } else if (intento > secreto) {
    return "menor";
  } else {
    return "acierto";
  }
}

function jugarRonda(maxIntentos) {
  const secreto = generarNumeroSecreto();
  let puntos = 0;
  let intentos = 0;
  let acertado = false;

  while (intentos < maxIntentos && acertado === false) {
    const entrada = prompt(
      "Adivina el número del 1 al 100. Intentos restantes: " + (maxIntentos - intentos)
    );
    if (!esIntentoValido(entrada)) {
      alert("Escribe un número entero entre 1 y 100");
    } else {
      intentos++;
      const resultado = compararIntento(Number(entrada), secreto);
      if (resultado === "acierto") {
        acertado = true;
        puntos += 100;
      } else {
        puntos -= 10;
        alert("Prueba con un número " + resultado);
      }
    }
  }

  if (acertado) {
    alert("Has acertado en " + intentos + " intentos");
  } else {
    alert("Te has quedado sin intentos, el número era " + secreto);
  }
  return puntos;
}

const menu =
  "Elige la dificultad:\n" +
  "1. Fácil (10 intentos)\n" +
  "2. Medio (7 intentos)\n" +
  "3. Difícil (5 intentos)\n" +
  "4. Salir";

function iniciarPartida(dificultad = "2") {
  let puntuacion = 0;
  let puntosRonda = 0;
  let opcion = dificultad;

  while (opcion !== "4") {
    switch (opcion) {
      case "1":
      case "2":
      case "3":
        puntosRonda = jugarRonda(intentosPorNivel(opcion));
        puntuacion += puntosRonda;
        alert("Puntos de la ronda: " + puntosRonda + "\nPuntuación total: " + puntuacion);
        break;
      default:
        alert("Opción no válida");
    }
    opcion = prompt(menu);
  }

  alert("Fin de la partida, puntuación final: " + puntuacion);
}

iniciarPartida();