/*
  **Jogo da advinhação **

  Aprente a mensagem ao usuário:
  "Advinhe o número que estou pensando ?Está entre 0 e 10"

  Crie uma lógica para gerar um número aleatório
  e verificar se o número digitando é o mesmo que
  o aleatório gerado pelo sistema.

  Enquanto o usuário não advinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, aprensentar a mensagem:
  "Parabéns você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas.
*/


// let number = prompt("Advinhe o número que estou pensando. Está entre 0 e 10!");
// const randomNumber = Math.round(Math.random() * 10);

// let xAttempts = 0;

// while(Number(number) != randomNumber){
//   number = prompt("Erro, tente novamente, mas continue digitando o número");
//   xAttempts++;
// }

// alert(`Parabéns, você acertou o número em ${xAttempts} tentativas`);




alert("Jogo da adivinhação!! Você deve acertar um número entre 0 e 10!")

let userNumber = Number(prompt("Digite um número entre 0 e 10!"))

const randomNumber = () =>{
    let number = Math.round(Math.random() * 10);

    return number;
}

let numberRandom = randomNumber();


let xAttempts = 0;

while(numberRandom != userNumber){
    userNumber = prompt(`Você não acertou o número, continue tentando adivinhar!!`);
    xAttempts++
}

alert(`Parabéns, você acertou com ${xAttempts} tentativas!!`);