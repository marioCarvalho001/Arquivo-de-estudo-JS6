/*const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
//menu.classList.remove('ativo', 'teste');
//menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
menu.classList.add('possui azul');
};

menu.className += ' ativo';

console.log(menu.className);

//console.log(menu.classList);

const animais = document.querySelector('.animais');

console.log(animais.attributes[1]);

const img = document.querySelector('img')
//set para inserir
//console.log(img.getAttribute('src'));
console.log(img.setAttribute('bolo', 'bola'));

const possui = img.hasAttribute('bolo');

console.log(possui);

const carro = {
  portas:4,
  andar: (km)=>{console.log(`andou ${km}`);}
}*/

const ativo = document.querySelectorAll('.menu a');

ativo.forEach((x)=>{
  x.classList.add('ativo')
})

ativo.forEach((x)=>{
  x.classList.remove('ativo')
})

ativo[0].classList.add('ativo');

const imgs = document.querySelectorAll('img');

imgs.forEach((img)=>{
 const verificar = img.hasAttribute('alt');
 console.log(img,verificar);
})

const href = document.querySelector('a[href^="http"]');

href.setAttribute('href', 'ss');

console.log(href);