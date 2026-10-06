function pedirNumero(mensaje) {
  let valor;
  let valido = false;
  while (valido === false) {
    const entrada = prompt(mensaje);
    if (entrada === null || entrada.trim() === "") {
      alert("No has escrito nada");
    } else if (isNaN(Number(entrada))) {
      alert("Tienes que escribir un número");
    } else if (Number(entrada) <= 0) {
      alert("El número tiene que ser mayor que cero");
    } else {
      valor = Number(entrada);
      valido = true;
    }
  }
  return valor;
}

function pedirViajeros() {
  let viajeros = pedirNumero("Número de viajeros:");
  while (!Number.isInteger(viajeros)) {
    alert("El número de viajeros tiene que ser un número entero");
    viajeros = pedirNumero("Número de viajeros:");
  }
  return viajeros;
}

function calcularLitros(distancia, consumo) {
  return (distancia * consumo) / 100;
}

function calcularCosteTotal(litros, precio = 1.6) {
  return litros * precio;
}

function calcularCostePorViajero(costeTotal, viajeros) {
  return costeTotal / viajeros;
}

function obtenerCosteTotal(costeTotal, viajeros) {
  return costeTotal;
}

function mostrarCoste(titulo, calcular, costeTotal, viajeros) {
  const resultado = calcular(costeTotal, viajeros);
  console.log(titulo + ": " + resultado.toFixed(2) + " €");
}

const distancia = pedirNumero("Distancia del viaje en km:");
const consumo = pedirNumero("Consumo en litros cada 100 km:");
const precio = pedirNumero("Precio del litro de combustible:");
const viajeros = pedirViajeros();

const litros = calcularLitros(distancia, consumo);
const costeTotal = calcularCosteTotal(litros, precio);

console.log("Combustible estimado: " + litros.toFixed(2) + " litros");
mostrarCoste("Coste total", obtenerCosteTotal, costeTotal, viajeros);
mostrarCoste("Coste por viajero", calcularCostePorViajero, costeTotal, viajeros);