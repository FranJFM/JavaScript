let nombre = "Francisco Javier";
let apellidos = " Fernández Megías";

console.log(nombre +apellidos);

console.log("la longitud de la cadena es: " +(nombre + apellidos).length);

console.log((nombre + apellidos).slice(8,11));

console.log("Cambio mi segundo apellido por: " + apellidos.replace("Megías","Ruiz"));

console.log("Nombre en mayusculas: "+(nombre + apellidos).toUpperCase());

console.log("El ultimo caracter es: "+(nombre +apellidos).charAt(32));

console.log((nombre+apellidos).split(" "));

console.log("La posición donde empieza mi apellidos en el array es: "+ ((nombre+apellidos).split(" ")).indexOf("Fernández"));


let salaudo ="Bienvenido/a "
console.log(salaudo.concat(nombre+apellidos));

let palabras = (nombre + apellidos).split(" ");

console.log("Las iniciales de mi nombre son: "+ palabras[0].charAt(0) + palabras[1].charAt(0) + palabras[2].charAt(0) + palabras[3].charAt(0));









