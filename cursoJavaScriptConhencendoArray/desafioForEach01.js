const nomes = ['anA','jUlIa','Caio','vini','BIA','silva'];


const nomesPadronizados = nomes.map(nome => 
    nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
);

console.log(nomesPadronizados);

// Exemplos para entender o slice()
const exemplo = 'jUlIa';
console.log('String completa:', exemplo);
console.log('Posição 0 (primeira letra):', exemplo.charAt(0));
console.log('A partir da posição 1:', exemplo.slice(1));
console.log('Posição 1 até 3:', exemplo.slice(1, 3));
console.log('Últimas 2 letras:', exemplo.slice(-2));
