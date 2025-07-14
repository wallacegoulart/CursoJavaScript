const numeros = [1,2,3,4,5,6,7,8,4,5,6,7,5,3]
const multiplicaPordois = (numero) => numero * 2;

// PRIMEIRO: Declara a função
function executaOperacaoEmArray(array, callback) {
    // Percorre cada elemento do array
    array.forEach(elemento => {
        // Aplica a função callback no elemento
        const resultado = callback(elemento);
        // Imprime o resultado
        console.log(resultado);
    });
}

// DEPOIS: Chama a função
executaOperacaoEmArray(numeros, multiplicaPordois);