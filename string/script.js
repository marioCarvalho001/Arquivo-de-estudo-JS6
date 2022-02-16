/*const comida = 'pizza';
const frase = 'a melhor comida é ';


console.log(frase.concat(comida, '!!', ' continuação'));

const  fruta = 'banana';
const listaFrutas = 'Melancia, banana, Laranja';

console.log(listaFrutas.includes(fruta, 18));

console.log(fruta.endsWith('na'));
console.log(fruta.startsWith('Ba'));

const  banana = 'banana';
console.log(banana.slice(0,2));

const preco = 'R$ 99,00'

console.log(banana.repeat(2));

let listaItens = 'camisa bone calça';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens.split(' '));
console.log(listaItens);*/

const transacoes = [
  {
    descricao: 'Taxa do pao',
    valor : 'R$ 99',
  },
  {
    descricao: 'Taxa do mercado',
    valor : 'R$ 40',
  },
  {
    descricao: 'Taxa do banco',
    valor : 'R$ 50',
  }
]
let s = 0;
const t = transacoes.forEach((i)=>{
  let r  = +i.valor.substring(3);
  s = s + r;
})

console.log(s);

const transporte = 'carro,caminhão,bicicleta';

console.log(transporte.split(','));

const html = `
<ul>
<li><span>sobre</span></li>
<li><span>produto</span></li>
<li><span>chinelo</span></li>
</ul>
`;
console.log(html.replace(/[span]+/g, 'a'));

const frase = 'meu melhor amigo x';

console.log(frase.slice(-1));


const frase2 = ['taxa do boteco', 'da taxa americana', 'em relaçao a taxa' ,'do brisil da Taxa'];
let r = 0;
console.log(frase2.forEach((v)=>{
 
  if(v.includes('taxa')){
    r++;  
  }
  
}));
console.log(r);