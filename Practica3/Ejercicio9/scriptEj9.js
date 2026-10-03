const passwordSecreta = "secreto123";
let passwordUsuario = prompt("Introduce la contraseña:");

while (passwordUsuario !== passwordSecreta) {
  alert("Contraseña incorrecta. Inténtalo de nuevo.");
  passwordUsuario = prompt("Introduce la contraseña:");
}
alert("¡Contraseña acertada!");