function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitACelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function kmAMillas(km, factor = 0.621371) {
  return km * factor;
}

function millasAKm(millas, factor = 1.609344) {
  return millas * factor;
}

function eurosADolares(euros, precioDolar = 1.01) {
  return euros / precioDolar;
}

function dolaresAEuros(dolares, precioDolar = 1.01) {
  return dolares * precioDolar;
}

function pedirValor() {
  let valor;
  let valido = false;
  while (valido === false) {
    const entrada = prompt("Introduce el valor a convertir:");
    if (entrada === null || entrada.trim() === "") {
      alert("No has escrito nada");
    } else if (isNaN(Number(entrada))) {
      alert("Tienes que escribir un número");
    } else {
      valor = Number(entrada);
      valido = true;
    }
  }
  return valor;
}

function mostrarResultado(valor, unidadOrigen, unidadDestino, convertir) {
  const resultado = convertir(valor);
  alert(valor + " " + unidadOrigen + " equivalen a " + resultado.toFixed(2) + " " + unidadDestino);
}

const menu =
  "MENÚ DE CONVERSIÓN\n" +
  "1. Celsius a Fahrenheit\n" +
  "2. Fahrenheit a Celsius\n" +
  "3. Kilómetros a millas\n" +
  "4. Millas a kilómetros\n" +
  "5. Euros a dólares\n" +
  "6. Dólares a euros\n" +
  "7. Salir";

let opcion = "";
let valor;

while (opcion !== "7") {
  opcion = prompt(menu);
  switch (opcion) {
    case "1":
      valor = pedirValor();
      mostrarResultado(valor, "°C", "°F", celsiusAFahrenheit);
      break;
    case "2":
      valor = pedirValor();
      mostrarResultado(valor, "°F", "°C", fahrenheitACelsius);
      break;
    case "3":
      valor = pedirValor();
      mostrarResultado(valor, "km", "millas", kmAMillas);
      break;
    case "4":
      valor = pedirValor();
      mostrarResultado(valor, "millas", "km", millasAKm);
      break;
    case "5":
      valor = pedirValor();
      mostrarResultado(valor, "€", "$", eurosADolares);
      break;
    case "6":
      valor = pedirValor();
      mostrarResultado(valor, "$", "€", dolaresAEuros);
      break;
    case "7":
      alert("Hasta luego");
      break;
    default:
      alert("Opción no válida");
  }
}