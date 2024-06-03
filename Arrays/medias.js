// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;


// Posições
//              0   1    2   3
const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// Desafio - Adicionando elementos

// Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno: 10, 6 e 8

// Para corrigir, adicione a nota 7 e fala o cálculo de média correta

const notasDesafio = [10, 6, 8];

notasDesafio.push(7);

console.log(notas);

const mediaDesafio = (notasDesafio[0] + notasDesafio[1] + notasDesafio[2]) / notasDesafio.length;

console.log(mediaDesafio);