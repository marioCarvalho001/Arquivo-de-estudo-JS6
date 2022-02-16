const retornoImg = document.querySelectorAll('img');
console.log(retornoImg);

const retornoImagem = document.querySelectorAll('img[src^="img/imagem"]');

console.log(retornoImagem);

const link = document.querySelectorAll('[href^="#"]');
console.log(link);

const animais = document.querySelector('.animais_descricao');
const primeiroH2 = animais.querySelector('h2');

console.log(animais);
console.log(primeiroH2);

const ultimoP = document.querySelectorAll('p');

console.log(ultimoP);
console.log(ultimoP[18]);
console.log(ultimoP[--ultimoP.length]);