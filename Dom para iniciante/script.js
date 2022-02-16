const h1Selecionada = document.querySelector('h1');

function callBack(){
  console.log('clicou em', h1Selecionada.innerText);
}
h1Selecionada.addEventListener('click', callBack);

const hrefPagina = window.location.href;

console.log(hrefPagina);

const ativo = document.querySelectorAll('.titulo');
console.log(ativo[0].innerText);

const language = window.navigator.languages;

console.log(language);

const largura = window.innerWidth;

console.log(largura);