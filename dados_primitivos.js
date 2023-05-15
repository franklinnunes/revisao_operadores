const nome = "franklin"
const nome2 = 'franklin'
const nome3 = `franklin`
const num1 = 10
const num2 = 10.52
let nomeAluno    //undefined - nao aponta para local nenhuma na memória, PRECISA SER COM LET
const sobrenomeAluno = null   //nulo - nao aponta pra local nenhuma na memoria
const aprovado = true    //true or false - boolean (lógico)

console.log(typeof aprovado, aprovado)    //ve o tipo de dado


const a = [1, 2]
const b = a
console.log(a, b)

b.push(3)
console.log(a, b)