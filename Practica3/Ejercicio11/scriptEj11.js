let opcionElegida;

do {
  opcionElegida = Number(prompt("Elige una opción:\n1. Usuario principiante\n2. Usuario intermedio\n3. Usuario avanzado\n4. Salir"));

  switch (opcionElegida) {
    case 1:
      alert("Nivel: Usuario principiante");
      break;
    case 2:
      alert("Nivel: Usuario intermedio");
      break;
    case 3:
      alert("Nivel: Usuario avanzado");
      break;
    case 4:
      alert("Saliendo del programa...");
      break;
    default:
      alert("Opción incorrecta");
  }
} while (opcionElegida !== 4);