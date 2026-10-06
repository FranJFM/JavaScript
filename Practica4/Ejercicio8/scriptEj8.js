function analizar(...numeros) {
  if (numeros.length === 0) {
    return { error: "No se han recibido números" };
  }
  let suma = 0;
  let minimo = numeros[0];
  let maximo = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (!Number.isFinite(numeros[i])) {
      return { error: "Todos los valores tienen que ser números válidos" };
    }
    suma += numeros[i];
    if (numeros[i] < minimo) {
      minimo = numeros[i];
    }
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  return {
    suma: suma,
    media: suma / numeros.length,
    minimo: minimo,
    maximo: maximo,
  };
}

function mostrarInforme(informe) {
  if (informe.error !== undefined) {
    console.log(informe.error);
  } else {
    console.log("Suma: " + informe.suma);
    console.log("Media: " + informe.media.toFixed(2));
    console.log("Mínimo: " + informe.minimo);
    console.log("Máximo: " + informe.maximo);
  }
}

mostrarInforme(analizar(4, 8, 15, 16));

const lista = [3, -2, 7, 7, -10];
mostrarInforme(analizar(...lista));

const vacia = [];
mostrarInforme(analizar(...vacia));

mostrarInforme(analizar(5));
mostrarInforme(analizar(2, 2, 2));
mostrarInforme(analizar(-1, -5, -3));
mostrarInforme(analizar(1, "a", 3));