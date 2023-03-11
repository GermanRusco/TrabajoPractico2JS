/*Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

// Primero vamos a declarar las variables a utilizar.

let i, rep

// Vamos a solicitar la cantidad de números que deseamos que tenga la pirámide.
let cantidad = parseInt(prompt("Ingrese un número: "));

//Vamos a consultar si el pedido es mayor a 50.
if(cantidad>0 && cantidad<50){
//Mediante un for vamos a solicitar que recorre la cantidad de veces que hemos escrito.
    for(i=cantidad;i>=1;i--){
        //Mediante otro for realizamos la repetición para hacer la pirámide.
                for(rep=i;rep>=1;rep--){
        //Imprimimos i, i veces.
                    document.write(i);
                }
        //Imprimimos un salto de línea
            document.write("<br>");  
            }
}
else{
    alert("No ingreso un número o el mismo es 50 o mayor, se recomienda ingresar un número menor a 50.")
}
