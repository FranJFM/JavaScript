const numero = Number(prompt("Introduce un número para ver sus divisores:"));

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i + " es divisor de " + numero);
  }
}