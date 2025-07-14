const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'] ; 
const medias = [7, 4.5, 8, 7.5]

const aprovados = alunos.filter((_, indeci)=>{
    return medias[indeci] >= 7;
})

const reprovados = alunos - aprovados ; 


console.log(aprovados)
console.log(reprovados)