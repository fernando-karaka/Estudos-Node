const notas = [10, 6, 8, 5.5, 10];


// O metódo Pop dos Arrays deleta um ou mais valores da Array, quando está vazio ele removerá o último valor do Array

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;


console.log(`A média é ${media}`);