/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……*/

// Primero vamos a declarar las variables a utilizar.
let i, rep

// Vamos a solicitar la cantidad de números que deseamos que tenga la pirámide.
let cantidad = parseInt(prompt("Ingrese un número: "));

//Vamos a consultar si el pedido es mayor a 50.
if(cantidad>0 && cantidad<=50){
    for(i=1;i<=cantidad;i++){
        for(rep=1;rep<=i;rep++){
            document.write(rep);
        }
        document.write("<br>");
    }
}
else{
    alert("El número introducido no es válido, se recomienda un número que sea positivo y menor o igual a 50");
}