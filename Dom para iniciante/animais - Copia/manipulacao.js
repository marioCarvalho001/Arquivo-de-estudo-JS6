/*onst h1 = document.querySelector('h1');
console.log(h1.innerHTML);
console.log(h1.outerHTML);
h1.innerHTML = '<p>novo estilo</p>';

//transversing



console.log(lista.parentElement.parentElement);

console.log(lista.nextElementSibling);
console.log(lista.children[--lista.children.length]);

console.log(lista.querySelector('li:last-child'));

console.log(lista.childNodes);

const lista = document.querySelector('.animais_lista');

const animais =  document.querySelector('.animais');
const titulo =  animais.querySelector('.titulo');
const animais_descricao = animais.querySelector('animais_descricao')

//animais.insertBefore(lista, animais_descricao)

//animais.removeChild(titulo);
/*animais.replaceChild(titulo,lista);

const novoh1 = document.createElement('h1');

novoh1.innerText = 'Novo titulo';
novoh1.classList.add('titulo');

animais.insertBefore(novoh1,titulo)

console.log(novoh1);


const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add('azul')

faq.appendChild(cloneH1);*/

const menu = document.querySelector('.menu')

const menuDupli = menu.cloneNode(true);
menuDupli.classList.toggle('azul');
const animais = document.querySelector('.titulo')

animais.appendChild(menuDupli)

const faq = document.querySelector('.faq');
const dt = faq.querySelector('dt');

const dd = dt.nextElementSibling;

faq.innerHTML = animais.innerHTML

dd.remove();