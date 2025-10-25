combinandoNomesPokemons()

let nomeEntrada = ["bulba", "Ivy", "Venu"]

function combinandoNomesPokemons(nomes) {
  // percorre o array e adiciona "saur" em cada nome
  return nomes.map(nome => nome + "saur");
}

// Chamando a função
let palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo cada nome gerado
for (let nome of palavraGerada) {
  console.log(nome);
}