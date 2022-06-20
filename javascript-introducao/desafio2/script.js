const students = [
  {
    name:"Maria",
    nota1:5,
    nota2:4.5,
    nota3:6
  },
  {
    name:"Eduarda",
    nota1:8,
    nota2:6.5,
    nota3:5
  },
  {
    name:"Marcelo",
    nota1:2,
    nota2:3,
    nota3:4
  },
  {
    name:"Lucas",
    nota1:8,
    nota2:6,
    nota3:5
  },
 

]



const average = (n1,n2,n3) => {
  let calc = ((n1 + n2 + n3) / 3).toFixed(2);

  return calc;
};

let notes;

const mainProgram = (student) =>{
   notes = average(student.nota1,student.nota2,student.nota3)

  if (notes >= 6){
    alert(`Parabéns o(a) estudante ${student.name} passou no concurso com a média de: ${notes}`);
  } else{
    alert(`Infelizmente o(a) estudante ${student.name} não conseguiu atingir a média, e sua nota foi de: ${notes} `)
  }

  
}

students.forEach(mainProgram)