/*var numero = 20;
var numero2 = 10;
numero *= numero2; //= numero = numero *10

console.log(numero);

var idade = 20;
var naoPossuiDiabete = true;
var podeBeber;
podeBeber = (idade >=18 && naoPossuiDiabete) ? 'pode berber' : false;

console.log(podeBeber);

var possuiFaculdade = true;

if (possuiFaculdade == false){
  console.log('Possui faculdade');
} else {
  console.log('não possui');
}

var scroll = 1000;
var scroll2 = 500;

scroll += scroll2;
console.log(scroll);

var carro = true;
var casa = true;

var darCredito = (carro && casa) ? 'dar credito': 'negar credito'; 
console.log(darCredito);
//if (darCredito === true) {console.log('dar credito');}else
//{console.log('sem credito');}
*/

//Escopo
var carro = 'Fusca';

function mostrarCarro(){
  console.log(carro);
}

mostrarCarro();
console.log(carro);

/*if (true){
  const mes ='Dezembro';
  console.log(mes);
}
console.log(mes);*/

{
  var carro = 'fusca2';
  const ano = '2021';
}

console.log(carro);
//console.log(ano);
var i =10;
for (let i = 0; i < 1; i++){
  console.log(`Numero ${i}`);
}
console.log(i*10);

const semana  = 'sexta';

console.log(semana);

const data = {
ano:2018,
mes:'dezembro',
}

data.ano = 2019;

data.dia = 26;

{
  var cor = 'preto';
  const marca = 'fiat';
  let portas = 4;
}
//console.log(cor, marca, portas);

const dois = 2;
function somarDois(x){
  return x + dois;
}
function divirDois (x){
  return x + dois;
}
console.log(somarDois(4)); 
console.log(divirDois(6)); 