/*function areQuadrado(lado){
  return lado * lado;
}

areQuadrado(2);

function corFavorita (cor){
  if (cor === 'azul'){
    return 'eu gosto de azul';
  } else if(cor === 'vermelho'){
    return 'eu gosto de vermelho';
  } else if (cor === 'verde'){
    return 'eu gosto de verde';
  } else  {
    return 'escolha uma cor'
  }
 
}

console.log('escolha uma cor entre azul, vermelho, e verde');
console.log(corFavorita(''));

addEventListener('click', function(){
 
  console.log('Clicou');
})

function terceiraIdade (idade){
  if(typeof idade !== 'number'){
    return 'por favor preencha um numero'
  } else if (idade >=60){
    return true;
  }else{
    return false;
  }
 
}

console.log(terceiraIdade()); 


function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

var profissao = 'Designer';

function dados (){
  var nome = 'Mario';
  var idade = 28;
  function outrosDados(){
    var endereco = 'Rio de janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());*/

// Crie uma função para verificar se um valor é Truthy

function dado(valor){
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(resultado){
 return resultado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome}  ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function valor(resultado){
  if (resultado%2==0){
    return 'o valor é par'
  } else{
    return 'o valor é impa'
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
/*function valor(numero){
  if (numero > 0){
    return ` voce digitou ${numero}`;
  } else {
    return 'insira um valor';
  }
}*/

function dato(dados){
  return typeof dados;
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
 addEventListener ('click', function(){
   console.log('mario');
 })

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar (paisesVisitados){
    return ` ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
} 
function jaVisitei (paisesVisitados){

  return `já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
  
}
precisoVisitar(20);


