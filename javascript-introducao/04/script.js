/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre, calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabens.

  Se o aluno não passou no bimestre, motivar o aluno
  a dar seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome
  do aluno e a nota.
*/

// alert("Vamos calcular sua média ? :D")

// let student = prompt("Por favor, informe seu nome:");
// let n1 = prompt("Digite a nota da primeira prova:")
// let n2 = prompt("Digite a nota da segunda prova:")
// let n3 = prompt("Digite a nota da terceira prova:")

// let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

// let result = average > 6;
// average = average.toFixed(2) // Casas decimais

// if (result) {
//   alert("Parabéns, " + student + "! Você passou de ano! E sua média foi de: " + average);
// } else if (average < 3){
//   alert("Infelizmente não há nada que se possa fazer, você foi reprovado com a média de: " + average);
// } else{
//   alert("Você ainda tem chance " + student + "! Você ficou com a média de: " + average + "! E deve se esforçar para passar de ano!" )
// }



let studentName = prompt("Digite o nome do estudante:")

let note1 = Number(prompt("Digite a nota da primeira prova:"));
let note2 = Number(prompt("Digite a nota da segunda prova: "));
let note3 = Number(prompt("Digite a nota da terceira prova:"))


function calcAverage(valor1,valor2,valor3){
    let calc = ((valor1 + valor2 + valor3) / 3).toFixed(2);
    return calc;
}

let average = calcAverage(note1,note2,note3);

if(average >= 6){
    alert(`Parabéns ${studentName}, você passou de ano com a média de : ${average}`);
} else{
    alert(`Infelizmente você não conseguiu passar de ano, e sua média foi de : ${average}`)
}
        
