
/*var ultimoItem = videoGames.pop();

videoGames.push('3ds');

for (var numero = 1 ; numero < 5; numero++) {
  console.log(numero);
}

var i = 0;

while (i < 4){
  console.log(i);
  i++;
}*/

var videoGames = ['Switch', 'PS4', 'XBOX', '3ds'];

for(var item = 0; item < 4; item++){
  console.log(videoGames[item]);
  if (videoGames[item] === 'XBOX'){
    break;
  }
}

var frutas = ['banana', 'pera','macâ'];
frutas.forEach(function(frutas, index){
  console.log(frutas, index);
})

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var campeao = [1959, 1962, 1970, 1994, 2002 ];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i <= campeao.length; i++){
  console.log(`o brasil ganhou a copa de ${campeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['banana','maçã','pera','uva']
for (var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta]);
  if (frutas[fruta] === 'maçã'){
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length-1];

console.log(ultimaFruta);

