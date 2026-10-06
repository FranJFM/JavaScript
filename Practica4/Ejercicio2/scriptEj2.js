function mostrarParametros(a, b, c, ...resto) {
  console.log("Primer parámetro: " + a);
  console.log("Segundo parámetro: " + b);
  console.log("Tercer parámetro: " + c);
  console.log("Resto de parámetros: " + resto);
}

mostrarParametros(1, 2, 3, 4, 5);