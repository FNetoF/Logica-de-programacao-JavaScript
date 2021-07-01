/*  ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    * receitas: []  // Entrada de dinheiro
    * despesas: []  // Saída de dinheiro

    Agora, crie uma função que irá calcular o total de receitas e
    despesas e irá mostar uma mensagem se a família está com saldo
    positivo ou negativo, seguido do valor do saldo.
*/

const family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {

    let total = 0

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {

    const calculateIncomes = sum(family.incomes)    
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0
    let balanceText = "Negativo"

    if(itsOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()
