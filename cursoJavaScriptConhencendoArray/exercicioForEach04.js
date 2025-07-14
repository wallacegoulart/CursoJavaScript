const numeros = [6, 9, 12, 15, 18, 21];

const multiplicadoPor3 = numeros.map(num => num * 3 );

let soma = 0;

multiplicadoPor3.forEach(num => soma += num);

let soma02 = 0 ; 
numeros.forEach(num => soma02 += num *3);

const ind = multiplicadoPor3.findIndex(num => num === 18 )

const ind02 = numeros.findIndex(num => (num * 3) === 18 )

console.log(multiplicadoPor3);
console.log(soma);
console.log(soma02);
console.log(ind);
console.log(ind02);