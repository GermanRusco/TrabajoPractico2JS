/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666*/

// Primero vamos a declarar las variables a utilizar.

let i, rep

//Mediante un for vamos a solicitar que recorre la cantidad de veces que hemos escrito.
    for(i=1;i<=30;i++){
//Mediante otro for realizamos la repetición para hacer la pirámide.
        for(rep=1;rep<=i;rep++){
//Imprimimos i, i veces.
            document.write(i);
        }
//Imprimimos un salto de línea
    document.write("<br>");  
    }