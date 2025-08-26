let numero = 1

console.log(numero === 1)

// o comando == compara apenas valor, enquanto o === compara valor e formato, portanto é mais seguro utilizar ===

let masculino = "nasceu com sexo masculino"
let feminino = "nasceu com sexo feminino"
let trans = " alguém que nasceu com um sexo, porém se identifica com o sexo oposto"

console.log(masculino === feminino )
console.log(trans === feminino)

let email ="kevindonizeti@gmail.com"
let senha = "12345"

let emaildigitado ="kevindonizeti@gmail.com"
let senhadigitada ="12345"
let verificadoremail = email === emaildigitado
let verificadorsenha = senha === senhadigitada

console.log(verificadoremail)
console.log(verificadorsenha)
