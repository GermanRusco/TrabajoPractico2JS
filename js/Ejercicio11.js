//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 

//Solicitamos el nombre y edad.

let nombre1 = prompt("Ingrese un nombre: ");
let edad1 = parseInt(prompt("Ingrese una edad: "));

let nombre2 = prompt("Ingrese un nombre: ");
let edad2 = parseInt(prompt("Ingrese una edad: "));

let nombre3 = prompt("Ingrese un nombre: ");
let edad3 = parseInt(prompt("Ingrese una edad: "));

if(edad1 >= 0 && edad2 >= 0 && edad3 >= 0){
//Verificamos cual de las edades es mayor.
    let mayor=Math.max(edad1,edad2,edad3);
    if(mayor==edad1){
        document.write("El mayor es: " + nombre1);
    }
    if(mayor==edad2){
        document.write("El mayor es: " + nombre2);
    }
    if(mayor==edad3){
        document.write("El mayor es: " + nombre3);
    }
}
else{
    alert("La edad tiene que ser positivo.");
}