//Realiza un script que genere un número aleatorio entre 1 y 99.

/*Vamos a utilizar la función Math.floor para redondear al número en uno entero y la función Math.random 
para obtener un número aleatorio mayor que 0 y menor que 1.*/

let numero = Math.floor((Math.random()*99)+1);

//Vamos a mostrar el número.

document.write(numero);