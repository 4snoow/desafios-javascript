/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

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

let patientsName = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []


for(let patient of patients){
  patientsName.push(patient.name);
  patientsAge.push(patient.age);
  patientsWeight.push(patient.weight);
  patientsHeight.push(patient.height);
}


alert(patientsName);
/*alert(`${patients[1].name} tem ${patients[1].age} anos e tem ${patients[1].weight}kg e ${patients[1].height} de altura`);*/


/*for(let index = 0; index < patients.length; index++){
    patientsName[index] = patients[index].name; */