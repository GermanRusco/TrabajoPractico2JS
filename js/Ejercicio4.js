//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

//Primero vamos a indicar una variable a utilizar.
let suma=0;
//Vamos a usar do-while para realizar un bucle.
do{
// Vamos a solicitar el ingreso de un número.
let numero = parseInt(prompt("Ingrese un número: "));
//Vamos a ver si es un número
    if(!isNaN(numero)){
        suma=suma+numero;
    }
//En caso de no ser número.
else{
    alert("Ingrese números.");
}
}
//Vamos a consultar si se desea seguir.
while(confirm("Desea Seguir?"));
//Mostramos el resultado de la suma de todos los números. 
document.write(suma);