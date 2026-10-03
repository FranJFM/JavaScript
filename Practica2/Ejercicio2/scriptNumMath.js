let radio = 3.5;
const pi = 3.14159;

let area = pi * Math.pow(radio,2);
console.log("El área es: " + area);

area = area.toString();
console.log("Ahora en string: " + area);


console.log("Ahora solo con 3 decimales: " +  area.toString().slice(0,6));

console.log("Ahora transformo el area a entero: " + Number.parseInt(area));

console.log("Ahora la redondeamos a entero: " + Math.floor(area));

numRandom =Math.random()*20;
console.log("El área por un número aleatorio entre 1-20: " + (area * numRandom));

console.log("El valor del radio es finito y positivo? -> " + Number.isFinite(radio));









