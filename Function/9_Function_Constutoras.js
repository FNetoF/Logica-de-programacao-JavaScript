/*
    Function() construtor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {

    this.name = name

    this.walk = function() {
        return this.name + " está andando"
    }
}

const felipe = new Person("Felipe")
const pessoa = new Person('Pessoa')

console.log(felipe.walk())
console.log(pessoa.walk())
