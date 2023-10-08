console.log('Olá, JavaScript!')

var userName = 'Muriel Stanger'

document.getElementById('userName').innerHTML = userName

//Variáveis//

//var nome = 'Mestre Yoda'
//var idade = 100
//var jedai = true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedai)

// Operadores Matemático

/*var n1 = 5
var n2 = 5 

var total = n1 + parseInt(n2)
console.log(total)
*/

// CONTROLE DE FLUXO//

// Sendo um cliente correntista do banco
// posso sacar dinheiro em caixas eletrônicos
// para poder comprar em lugares que não aceitam o cartão de débito ou crédito

//Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1.000,00
// Quando faço um saque de 500,00
// Então o valor do saque deve ser deduzido do meu saldo

/*var saldo = 1000

function saque(valor) {
    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo')
        console.log('O seu saldo é de :' + saldo + ',00 R$ e sua tentativa de saque foi: ' + valor + ',00 R$')
    } else if (valor > 700) {
        console.log('Valor do saque é superior ao permitido')
    } else {
        saldo = saldo - valor
        console.log('O seu saldo é de :' + saldo + ',00 R$')
    }
}

saque(701)/*




// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1.000,00
// Quando faço um saque de 1.001,00
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo



// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de mil reais
// E o valor máximo por operação é de 700,00
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é suerior ao máximo permitido por operação
*/


//ARRAYS // 

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

//console.log(gaveteiro[0])
/*
var personagens = ['Mestre Yoda', 'Luke', 'Princesa Léia', 'Darth Vader']

console.log(typeof personagens[0])

personagens.push('C3pO')
personagens.push('R2D2')

//personagens.pop() // REMOVE SEMPRE O ÚLTIMO

personagens = personagens.filter(function(p){  // remove um único item da lista
    return p !== 'Darth Vader'
})

personagens = personagens.filter(function(p){ 
    return p === 'Mestre Yoda'  // retorna apenas o mestre yoda
})

console.log(personagens)
*/

// CONTROLE DE REPETIÇÕES // 

var personagens = ['Mestre Yoda', 'Luke', 'Princesa Léia', 'Darth Vader', 'R2D2']

//personagens.forEach(function(p){
////   console.log(p)
//})

//for (var i in personagens) {
//    console.log(personagens[i])
//}

//for (var i = 0; i <= 10; i++){
//   console.log(personagens[i])
// cód vai ser executado até a condição executar false.
//}

// OBJETOS //
/*
var yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedai: true,
    mostraIdade: function () {
        console.log(`A idade do ${this.nome} é: ${this.idade}`)
    }
}
//yoda.nome = 'Mestre Yoda'
//yoda.idade = 100
//yoda.jedi = true

yoda.mostraIdade()
console.log(yoda)*/

//Constantes // 

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)