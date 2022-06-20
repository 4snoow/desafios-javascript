/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta com o resultado.
*/


alert("Iremos fazer algumas operações matemáticas com 2 números");

let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mult = numberOne * numberTwo;
const divi = numberOne / numberTwo;
const restDivi = numberOne % numberTwo;

alert("A soma é : " + sum);
alert("A subtração é : " + sub);
alert("A multiplicação é : " + mult);
alert("A divisão é : " + divi);
alert("O resto da divisão é : " + restDivi);
