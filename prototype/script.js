function pessoa(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}



pessoa.prototype.nomeCompleto = function(){
  return `${this.nome } ${this.sobrenome } ${this.idade }`;
}
const p = new pessoa('Mario', 'silva', 21);
console.log(p.nomeCompleto());

const n = NodeList.prototype;
const h = HTMLAllCollection.prototype;
const d = Document.prototype;
