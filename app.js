console.log('Hola')

/* 
 */
let fin = false;
let suma=0;

while (fin == false) {
  let index = window.prompt(`
  Elige un producto
  1.- Pizza básica, con un precio de 5 USD por cada una.
  2.- Pizza con 2 ingredientes, con un precio de 10 USD por cada una.
  3.- Pizza con 3 ingredientes, con un precio de 12 USD por cada una.
  4.- Refresco chico, con un precio de 2 USD.
  5.- Refresco grande, con un precio de 3 USD.
  `)

  if (index == '1') {
    console.log('$5')
    suma = suma + 5;
    console.log('El total es: '+suma);
  }
  if (index == '2') {
    console.log('$10')
    suma = suma + 10;
    console.log('El total es: '+suma);
  }
  if (index == '3') {
    console.log('$12')
    suma = suma + 12;
    console.log('El total es: '+suma);
  }
  if (index == '4') {
    console.log('$2')
    suma = suma + 2;
    console.log('El total es: '+suma);
  }
  if (index == '5') {
    console.log('$3')
    suma = suma + 3;
    console.log('El total es: '+suma);
  }

  fin = window.prompt(`¿Quiere agregar un nuevo producto?`) === 's' ? false : true;
}