console.log('Hola')

/* 
 */
let fin = false;

while (fin == false) {
  let index = window.prompt(`
  Elige un producto
  1.- Pizza básica, con un precio de 5 USD por cada una.
  2.- Pizza con 2 ingredientes, con un precio de 10 USD por cada una.
  3.- Pizza con 3 ingredientes, con un precio de 12 USD por cada una.
  4.- Refresco chico, con un precio de 2 USD.
  5.- Refresco grande, con un precio de 3 USD.
  `)
  
  if(index == '1'){
    console.log('$5')
  }
  if(index == '2'){
    console.log('$10')
  }
  if(index == '3'){
    console.log('$12')
  }
  if(index == '4'){
    console.log('$2')
  }
  if(index == '5'){
    console.log('$3')
  }

  fin = true;
}