//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

//Vamos a solicitar un texto.

let texto=prompt("Escriba un texto:");

//Solicitamos la longitus del texto.

let longitud=texto.length;

//Declaramos las variables.
let i,caracter;

//Vamos a separar los caracteres.
for(i=0;i<longitud;i++){
    caracter=texto.charAt(i);
    if(i==longitud-1){
        document.write(caracter);
    }
    else{
        document.write(caracter + "-");
    }
}