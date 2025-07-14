/*
Desafio 
1) Crie uma função que recebe como argumento o nome de um aluno.
2) Verique se a pessoa faz parte da lisa de alunos 
3) Retorn a media do aluno correspondente
4) Caso o nome não esteja na lista, retorno a mensagem indicando 
*/

var alunos = ['Wallace','Igor','Ana','Juliana']
var notas = [8, 7, 6, 5]

var listaAlunosNotas = [alunos,notas]


function nomeAluno (nome){

    if(listaAlunosNotas[0].includes(nome)){
        console.log(`A nota do aluno ${nome} é : ${listaAlunosNotas[1][listaAlunosNotas[0].indexOf(nome)] }`)
    }
    else {
        console.log(`O aluno ${nome} não está na lista`)
    }

}


nomeAluno('Caio')

