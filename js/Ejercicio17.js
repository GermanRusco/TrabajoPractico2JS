//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

//Primero vamos a solicitar el texto.
let texto=prompt("Escriba un texto: ");

//Vamos a ver la longitus del texto.
let longitud=texto.length;

//Para no tener problemas con mayúsculas y minúsculas pasamos todos a mayúsculas.
texto=texto.toUpperCase();

//Declaramos variables.
let i, j, posicion;

//Declaramos un array con las vocales en mayúsculas.
let vocales = ["A", "E", "I", "O", "U"];

//Declaramos una bandera y la inicializamos con false.
let bandera=false;

//Vamos a recorrer el texto.
for(i=0;i<=longitud;i++){
//Recorremos el array de vocales.
    for(j=0;j<=vocales.length;j++){
//En el caso de que haya una vocal pasará lo siguiente.
        if(vocales[j]==texto.charAt(i)){
//Guardamos la posición.
            posicion=i+1;
//Colocamos la bandera.
            bandera=true
            break;
        }
    }
    if(bandera){
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);

