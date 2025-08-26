//posição vetor  0              1             2
let pokemon = ["pikachu", "charmander" , "charizard"]


//podemos criar vetores dessa maneira, como uma tabela.
let infoPokemon = [
[" pikachu", "M", 30],
["charmander", "F", 50],
["charizard", "M", 20],
    []
]
    
console.log("O pokemon" + infoPokemon[0][0], "é do sexo " + infoPokemon[0][1], "e está no nível " + infoPokemon[0][2])

console.log(infoPokemon.length) //conta a quantidade de índices que voce tem dentro de um vetor.
// pokemon.pop() esse comando remove um indice da direita para a esquerda
// pokemon.shift() esse comando remove um indice da esquerda para a direita
