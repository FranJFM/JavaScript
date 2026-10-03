let edad = Number(prompt("Introduce tu edad:"));

let nota = Number(prompt("Introduce tu nota media con tres decimales:"));

console.log("Nota con dos decimales: " + nota.toFixed(2));

console.log("Suma: " + (edad + nota));
console.log("Resta: " + (edad - nota));
console.log("Multiplicación: " + (edad * nota));
console.log("División: " + (edad / nota));

let resultadoDivision = edad / nota;
let resultadoString = resultadoDivision.toString();

console.log("Resultado de la división convertido a string: " + resultadoString);

let aprobado = true;    

console.log("Variable booleana: " + aprobado);

console.log("Edad es de tipo: " + typeof edad);
console.log("Nota es de tipo: " + typeof nota);
console.log("Tipo de aprobado: " + typeof aprobado);


if(isNaN(edad)){
    console.log("La variable edad no es un numero valido");
}else if(isNaN(nota)){
    console.log("La nota no es unnumero valido");
}else if(nota < 0 || nota > 10){
    console.log("La nota debe estar entre 0 y 10");
}else if(nota == 0){
    console.log("La nota no se puede dividir entre 0");
}else {
    console.log("Edad y nota son validas");
}



