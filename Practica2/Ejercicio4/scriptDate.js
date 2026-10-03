let fecha= new Date("2026-10-3");

console.log("El dia del mes en el que estamos es: "+fecha.getDate());

console.log("El mes en el que estamos es: "+(fecha.getMonth()+1));

console.log("El año en el que estamos es: "+fecha.getFullYear());

console.log(new Intl.DateTimeFormat("es-ES",{dateStyle:"long"}).format(fecha));