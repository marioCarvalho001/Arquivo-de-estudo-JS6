/*const img = document.querySelector('img');

function callBack (event){
  console.log(event);
}

//img.addEventListener('click', callBack);





const imagemLista = document.querySelector('.animais_lista');

function callBackLista(event){
  //console.log(event.currentTarget);
  //console.log(event.target);
  console.log(event.type);
}
imagemLista.addEventListener('click',callBackLista);*/



/*const linkExterno = document.querySelector('a[href^="https"]');

function handLinkExterno(event){
  event.preventDefaut();
//console.log(event);
//console.log(this);
console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handLinkExterno);


const h1 = document.querySelector('h1');

function hendleEvent(event){
  console.log(event.type, event);
}

h1.addEventListener('click', hendleEvent);
h1.addEventListener('mouseenter', hendleEvent);
h1.addEventListener('mousemove', hendleEvent);

window.addEventListener('scroll', hendleEvent)

function handdleKeyboard(event){
  if (event.key === 'f'){
    document.body.classList.toggle('fundo_black')
  }
}

window.addEventListener('keydown', handdleKeyboard);

function hendleEvent(event){
  console.log(event.key);
}
window.addEventListener('keydown', hendleEvent);


const imgs = document.querySelectorAll('img');

function handleImg (event){
  console.log(event.target);
}

imgs.forEach ((img)=>{
  img.addEventListener('click', handleImg);
})


const linkInterno = document.querySelectorAll('a[href^="#"]');


function ativo (event){
  event.preventDefault();
  linkInterno.forEach((link) =>{
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
 
  //this.classList.add('ativo');
  console.log(event);
}

linkInterno.forEach((t) => {
  t.addEventListener('click', ativo)
})

const todosElementos = document.querySelectorAll('body *');
console.log(todosElementos);

//function resultado(event){
//  console.log(event.currentTarget);
//}
/*function resultado(event){
  event.currentTarget.remove();
}

todosElementos.forEach((elemento)=>{
  elemento.addEventListener('click', resultado)
})
*/
function uper (ol) {
  console.log(ol.key);
  if(ol.key === 't'){
    document.documentElement.classList.toggle('texto_maior');
  }
}
window.addEventListener('keydown', uper);