/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */


const patients = [
  {
    name: "João",
    age:21,
    weight:75,
    height:180,
  },
  { 
    name:"Fernanda",
    age:18,
    weight:60,
    height:150,
  },
  {
    name:"Carlos",
    age:30,
    weight:80,
    height:190,
  },
]

function IMC (weight, height){
  return (weight / ((height / 100) **2)).toFixed(2)
}

function printPatientIMC(patient){
alert(`Paciente ${patient.name} possui o IMC de 
${IMC(patient.weight, patient.height)}`)
}



for(let patient of patients){

  printPatientIMC(patient)
}



// for(let index = 0; index < patients.length; index++ ){
//   printPatientIMC(patients[index]);
// }











// function liquidificador(suco1,suco2){
//   const suco = suco1 + suco2;
//   return suco;
// }

