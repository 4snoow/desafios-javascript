/*
  Capture 10 items para compor a lista de um supermercado.

  Após capturar os 10 items, imprima-os, separando por vírgula.

*/

let itemArray = [];

for(let item = 0; item < 10; item++ ){

  let itemCapt = prompt(`Digite o item de número ${item + 1} :`);

  itemArray[item] = itemCapt;

}

alert(itemArray);