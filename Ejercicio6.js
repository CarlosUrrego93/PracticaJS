/**
 * Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18
 */

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let pais = prompt("Ingrese su país");
let departamento = prompt("Ingrese su departamento");

if (
  nombre === null ||
  nombre === "" ||
  edad === null ||
  edad === "" ||
  pais === null ||
  pais === "" ||
  departamento === null ||
  departamento === ""
) {
  alert("Opción Invalida");
} else {
  nombre = nombre.toLowerCase();
  pais = pais.toLowerCase();
  departamento = departamento.toLowerCase();
  if (edad >= "18" && pais === "canada" && departamento === "toronto") {
    alert("Eres beneficiario del programa de becas academicas");
  } else {
    alert("No cumples los requisitos para acceder a esta beca");
  }
}

