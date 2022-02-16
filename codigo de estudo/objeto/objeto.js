var pessoa = {
  nome: 'mario',
  idade: 28,
}

console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area: function (lado){
    return lado * lado;
  },
  perimetro :function(lado){
    return this.lados * lado;
  },
  formaSimplicificada(){
    return 5 ;
  },
}

console.log(quadrado.area(2));
console.log(quadrado.perimetro(5));


var height = 100;
var menu = {
  width:800,
  height:50,
  backgroundColor:'#84E',
  metadeHeight(){
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';

menu.color = 'blue';

var bg = menu.backgroundColor;


// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'mario',
  sobrenome:'carvalho',
  rua:'rua bla bla bla',
  numero:95,
  preco:000,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}
console.log(dados.nomeCompleto());


console.log(`${dados.nome} ${dados.sobrenome}`);

// Modifique o valor da propriedade preco para 3000

dados.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca:'labrador',
  cor:'preto',
  idade:10,
  latir(pessoa){
      if (pessoa === 'homem'){
        return 'ele está latindo';
      } else{
        return 'ele está quieto';
      }
  }
}