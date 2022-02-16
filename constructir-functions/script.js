/*function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade
}
Pessoa.prototype.andar = function(){
  return 'pessoa andou'
}
console.log(Pessoa.prototype);


//Array.from =  transforma uma NodeList em uma array

const Carro = {
  marca:'ford',
  preco:2000,
  andar(){
    return true;
  }
}*/

function pessoa (nome, sobreNome,idade){
  this.nome = nome ;
  this.sobreNome= sobreNome;
  this.idade = idade;

}
pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${ this.sobreNome}`;
}
const pessoa2 = new pessoa('mario', 'carvalho' ,28);


Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLAllCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)
HTMLElement.prototype

