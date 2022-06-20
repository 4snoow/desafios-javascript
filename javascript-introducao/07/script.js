/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/






alert("Programa com opções! :D")

let options;
let itemArray = [];

while(options != 4){

    let options = Number(prompt(`
Olá usuário! Digite o número da opção desejada

1. Cadastrar um item na lista

2. Mostrar itens cadastrados

3. Deletar um item na lista

4. Sair do programa`));

    switch(options){
        case 1:
            let item = prompt("Digite o primeiro item")
            itemArray.push(item);
        break;

        case 2:
            if(itemArray.length == 0){
            alert("Nenhum item cadastrado")  
            } else if(itemArray.length >= 1){
                 alert(`Os itens cadastrados são: ${itemArray}`) 
            }
        break;

        case 3:
            if(itemArray.length == 0){
              alert("Não há nenhum item para deletar")
            } else if (itemArray.length >= 1){
                  let deletItem = Number(prompt("Digite o número referente a posição do Array que quer deletar, começando do 0"));
            itemArray[deletItem] = itemArray.pop();
              alert(`Item deletado, a nova lista contém os itens: ${itemArray}`)
            }
        break;

        case 4:
            if(options == 4){
              alert("Saindo do programa, até mais!!");
            }
        break;

        default:
          alert("Opção inválida, tente novamente")
    }
}






// let option;
// let itemArray = [];

// while(option != 3){

//   option = Number(prompt(`
//   Olá usuário! Digite o número da opção desejada

//   1. Cadastrar um item na lista
//   2. Mostrar itens cadastrados
//   3. Sair do programa`))


//   switch(option){
//     case 1:
//       let itemCad = prompt(`Digite um item para cadastrar :`)

//       itemArray.push(itemCad);
//     break;

//     case 2: 
//       if (itemArray.length == 0) {
//         alert(`Não há nenhum item cadastrado.`)
//       } else {
//         alert(`Os itens cadastrados são: ${itemArray}`)
//       }
//     break;

//     case 3:
//       if(option == 3){
//         alert("Fim do programa.")
//       }
  
//     break;

//     default:
//       alert("Digite um comando válido");
//   }
  
// }

/*
  if(option == 1){
    let itemCad = prompt(`Digite um item para cadastrar :`)

    itemArray.push(itemCad);
  } 
  
   else if( option == 2 ) {
    
   if (itemArray.length == 0) {
    alert(`Não há nenhum item cadastrado.`)
  } else {
    alert(`Os itens cadastrados são: ${itemArray}`)
  }
}

  if(option == 3){
    alert("Fim do programa.")
  }

  else if(option > 3 ){
    alert("Digite um número válido")
  }
*/