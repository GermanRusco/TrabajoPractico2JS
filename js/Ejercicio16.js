//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

//Primero vamos a solicitar el texto.
let texto=prompt("Escriba un texto: ");

//Vamos a ver la longitus del texto.
let longitud=texto.length;

//Declaramos las variables a utilizar.
let i, caracter, salida="";

for(i=0;i<longitud;i++){
//Vamos a separar el texto por sus caracteres.
    caracter=texto.charAt(i);
//Vamos a acomodar los caracteres al revés.
    salida=caracter + salida; 
}
//Mostramos el texto al revés.
document.write(salida);