/*const sessao = document.querySelector('.animais_lista');

//const height = sessao.scrollHeight;
const topsessao = sessao.offsetTop;
console.log(topsessao);

const h2raposa = document.querySelector('h2');

const distancia = h2raposa.offsetLeft;

const rect = h2raposa.getBoundingClientRect();

console.log(rect.top);

console.log(
  window.innerWidth,
  window.outerWidth,
  window.outerHeight,
  window.innerHeight,
);

if (window.innerWidth < 2000){
  console.log('a tela é menor que 2000');
}

const small = window.matchMedia('(max-width: 600px)').matches;
if (small){
  console.log('menor');
} else {
  console.log('maior');
}*/

const i = document.querySelector('img');
//console.log(i.getBoundingClientRect());
const distancia_top = i.offsetTop
//console.log(i.offsetTop);
console.log(distancia_top);

function somaimgs(){
const img = document.querySelectorAll('img');
let soma = 0;
img.forEach((img)=>{
  soma += img.offsetWidth
  
});
console.log(soma);
}


window.onload = function(){
  somaimgs();
}

const links = document.querySelectorAll('a');

links.forEach((links)=>{
  const linkwidth = links.offsetWidth;
  const linkheight = links.offsetHeight;

  if (linkwidth && linkheight >=30){
    console.log('está certo');
  }else{
    console.log('esta errado');
  }
});


const browserSmall = window.matchMedia('max-width:800px;').matches;

if (browserSmall) {
const alteracao = document.querySelector('.menu');
alteracao.classList.add('menu_mobile');
}
