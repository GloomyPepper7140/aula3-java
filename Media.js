//um programa calcula a média de duas variáveis.
//se a média for menor que 5, o aluno é reprovado

function media(a, b){ 
    return (a + b)/2  
}

const valor1 = 1
const valor2 = 4

const resultado = media(valor1,valor2)

if (resultado >= 5){
 
    console.log ('o aluno está aprovado');

} 

else { 
    console.log ('o aluno está reprovado');
}


