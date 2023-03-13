/*Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 */

//Declaramos las variables a utilizar.
let i;
let rep=0;

//Realizamos un bucle que vaya del 1 al 500.
for(i=1;i<=500;i++){

//Vamos mostrando el número i.
    document.write(i);

//Vamos a ver si el número es múltiplo de 4.
    if(i%4==0){
        document.write(" (Multiplo de 4)");
    }

//Vamos a ver si el número es múltiplo de 9.
    if(i%9==0){
    document.write(" (Multiplo de 9)");
    }

//Vamos a realizar un salto de línea.
    document.write("<br>");

//Vamos a pedir que cuando i=5 se haga una línea.
    if (i % 5 == 0) {
    document.write("<hr>");
    }
}