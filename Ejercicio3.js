/**
 * Ejercicio 3: Calculadora de edad
Pide al usuario su edad y el algoritmo debe responder si es mayor de edad o menor de edad;
 */
let edad = prompt("Ingrese su edad");
if (edad === null || edad === "") {
  alert("Opción inválida");
} else {
  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
}
