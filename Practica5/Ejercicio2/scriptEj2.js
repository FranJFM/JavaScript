const pasillo = ["S", ".", "#", ".", ".", "."];
const movimientos = ["derecha", "derecha", "izquierda", "izquierda"];


function moverse(posicion, movimiento) {
  if (movimiento === "derecha") {
    return posicion + 1;
  }
  if (movimiento === "izquierda") {
    return posicion - 1;
  }
  return posicion;
}

function copiaPasillo(pasillo, posicion) {
  const copia = [...pasillo];
  copia[posicion] = "R";
  return copia;
}

let posicion = pasillo.indexOf("S");
const rechazos = [];

for (const movimiento of movimientos) {
  const destino = moverse(posicion, movimiento);

  if (destino < 0 || destino >= pasillo.length) {
    console.log(movimiento + ": rechazado; el movimiento esta fuera de los limites");
    rechazos.push(movimiento);
  } else if (pasillo[destino] === "#") {
    console.log(movimiento + ": rechazado; hay un obstáculo en la posición " + destino );
    rechazos.push(movimiento);
  } else {
    posicion = destino;
    console.log(movimiento + ": aceptado; posición " + posicion);
  }
}

console.log("Movimientos rechazados:", rechazos);
console.log("Pasillo final:", copiaPasillo(pasillo, posicion));