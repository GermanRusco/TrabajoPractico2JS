//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
//Primero vamos a crear una variable donde vamos a guardar nuestra cadena.

let resultado="";

//Vamos a utilizar do-while para ingresar varias cadenas hasta que coloquemos cancelar. 

do{
//Pedimos la cadena por teclado.
    let cadena = prompt("Introducir una cadena: ");
//Si no se escribe nada realizamos lo siguiente.
    if(cadena==""){
        resultado=resultado + cadena;
    }
    else{
        resultado=cadena+" - "+resultado;
    }
}
//Si pulsamos cancelar imprimimos resultado
while(confirm("Desea Seguir?"));
document.write(resultado);