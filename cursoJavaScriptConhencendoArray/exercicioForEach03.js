const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];



const todosAlunos = [...nomesTurmaA, ...nomesTurmaB]; 
const todosAlunos02 = nomesTurmaA.concat(nomesTurmaB)



const nomeEncontrado = todosAlunos.find((elemento)  => elemento === 'Carlo Oliveira')

console.log(todosAlunos);
console.log(todosAlunos02);
console.log(nomeEncontrado !== undefined ? nomeEncontrado : "Aluno não encontrado")
