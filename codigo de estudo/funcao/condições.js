var nome ='Mario Silva', idade = '21',comidaFavorita = '';
var numero = '', letra = '', sapato = '', camisa = '', caneca = '';
console.log('');

// númmeros e operadores

var idade = 23;
console.log(idade);
35
var numero = 'folha' *45;
//var folha = folha;
console.log( numero + folha);

var incremento = 5;
console.log(++incremento);

var numero = 50;
var folha = '200';
console.log( numero + +folha);

var numero = +'80';
var divisor = 2;
var unidade = 'kg';
var peso = numero/divisor + unidade;

console.log(peso);

var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiGraduacao){
  console.log('Possui graduação');
} else if(possuiDoutorado) {
  console.log('possui doutorado');
} else {
  console.log('sou eu então');
}
//contatenar é juntar uma string com numero sem somar
var nome = ('Mario')

if (nome){
  console.log(nome);
} else {
  console.log('nome não existe');
}

var nome = ('mario')

if (!nome){
  console.log(nome);
} else {
  console.log('false');
}

var nome = (10)
// === é estritamente igual !== verifica se é diferente
if (nome !== 10){
  console.log('true');
} else {
  console.log('false');
}

var corFavorita = 'vermelho';
//switch vai analisar a condição e ver se as case são iguais o parameto que foi selecionado no switch
switch (corFavorita){
  case 'azul':
    console.log('olhe para o ceu');
    break; 
    case 'vermelho':
      console.log('olhe para rosas');
      break; 
      case'amarelo':
      console.log('olhe para o sol');
      default:
}

