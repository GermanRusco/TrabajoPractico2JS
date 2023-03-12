//Realiza un script que cuente el número de vocales que tiene un texto.

//Primero vamos a solicitar el texto.
let texto=prompt("Escriba un texto: ");

//Vamos a ver la longitus del texto.
let longitud=texto.length;

//Para no tener problemas con mayúsculas y minúsculas pasamos todos a mayúsculas.
texto=texto.toUpperCase();

//Declaramos las variables a utilizar.
let i, caracter, contador=0;

for(i=0;i<longitud;i++){
//Vamos a separar el texto por sus caracteres.
    caracter=texto.charAt(i);
//Vamos a buscar las vocales.
    if(caracter=="A" || caracter=="E" || caracter=="I" || caracter=="O" || caracter=="U"){
        contador++
    }
}
document.write("El texto tiene " + contador + "  vocales.");