function eurosADolares(euros, precioDolar = 1.01) {
  return euros / precioDolar;
}

console.log(eurosADolares(100).toFixed(2));
console.log(eurosADolares(100, 1.08).toFixed(2));