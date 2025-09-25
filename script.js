const valorSalario = document.querySelector('#inputSalarioRecebido')
const valorConta = document.querySelector('#inputValueRecebido')
const BTNSalario = document.querySelector('.btn-salario')
const BTNReceber = document.querySelector('.btn-receber')


function formatValue(value) {
    const formatador = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return formatador
}

function changeSalario(){
    const cardSalario = document.querySelector('.receita-valor')

    cardSalario.innerHTML = `${formatValue(parseFloat(valorSalario.value))}`

    valorSalario.value = '';
}

function changeConta(){
    const cardConta = document.querySelector('.valor-users')

    cardConta.innerHTML = `${formatValue(parseFloat(valorConta.value))}`

    valorConta.value = '';
}

BTNSalario.addEventListener('click', changeSalario)
BTNReceber.addEventListener('click', changeConta)

