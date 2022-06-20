
alert("Vamos calcular dois números!! Mas não coloque números iguais. :D");

let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))


let operationSum;
let operationSub;
let operationMult;
let operationDiv;
let operationRest;


function operations(n1,n2){
   operationSum = n1 + n2;
   operationSub = n1 - n2;
   operationMult = n1 * n2;
   operationDiv = (n1 / n2).toFixed(1);
   operationRest = n1 % n2;
}

operations(numberOne,numberTwo);


function allOperations(){
    alert(`A soma dos dois números é: ${operationSum}, a subtração é : ${operationSub}, a multiplicação é : ${operationMult}, a divisão é : ${operationDiv} e o resto da divisão é : ${operationRest}`);
}

function ifParimpa(){
  if(operationSum % 2 === 0){
    alert("A soma é par")
  } else if(operationSum % 2 !== 0){
    alert("A soma é impar");
  }
}

allOperations();
ifParimpa();
