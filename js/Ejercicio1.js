// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.//
//Primero vamos a solicita por teclado la edad.

let edad = prompt("Ingrese su edad: ");
//Ahora vamos a consultar si es mayor de 18 años.
if (edad>=18 &&  edad<=85){
    document.write("Ya puedes conducir.");
}
//Vamos a mostrar que sucede si no es mayor de 18 años.
else{
    document.write("No es un número válido.");
}