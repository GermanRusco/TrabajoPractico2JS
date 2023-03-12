//Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

//Declaramos las variables a utilizar.
let i,j;

//Vamos a solicitar la cantidad de filas y columnas.
let filas = parseInt(prompt("Ingrese el número de filas: "));
let columnas = parseInt(prompt("Ingrese el número de columnas: "));

//Verificamos que los números sean mayor a 0.
if(filas > 0 && columnas > 0){
    //Vamos a multiplicar las filas y columnas.
    let mult=filas*columnas;

    //Imprimimos la tabla.
    document.write("<table border>");

    for(i=0;i<filas;i++){
    //Utilizamos <tr> para comenzar por filas.
        document.write("<tr>");
        for(j=0;j<columnas;j++){
    //Utilizamos <td> para comenzar por celda.
        document.write("<td>"); 
    //Se ecribe el valor de la multiplización y se va restando de a 1.
        document.write(mult);
        mult--;
    //Cerramos celda.
        document.write("</td>");
        }
    //Terminamos fila.
        document.write("</tr>");
    }
    //Terminamos de cerrar el tablón.
    document.write("</table>");
}
else{
    alert("Los valosres deben ser números y mayores a 0");
}