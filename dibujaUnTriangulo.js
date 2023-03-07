/*En este desafío, debes dibujar un triángulo isósceles usando bucles.
Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde derecho de la consola.
Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte.
Tendrás inputs y outputs como los siguientes 👇
Ejemplo 1:
Input: printTriangle(5, "*")
Output:
    *
   **
  ***
 ****
*****
Ejemplo 2:
Input: printTriangle(6, "$")
Output:
     $
    $$
   $$$
  $$$$
 $$$$$
$$$$$$

*/



function printTriangle(size, character){
    let triangle = "";
for (let i = 1; i <= size; i++) {
    let spaces= " ".repeat(size -i);
    let characters = character.repeat(i);
    triangle = triangle + spaces + characters;

    if (i < size) {
        triangle +="\n"
    }
}
return triangle;
}


/*
sise es cantidad de veces que va a imprimir
va a iterar agregando 1 character y restando un espacio
primer linea imprime  size -1 = cant de espacios + 1 character

*/