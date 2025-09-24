const valorSalario = document.querySelector('#inputSalarioRecebido')
const valorConta = document.querySelector('#inputValueRecebido')

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
}   

function changeConta(){
    const cardConta = document.querySelector('.valor-users')

    cardConta.innerHTML = `${formatValue(parseFloat(valorConta.value))}`
}


function enviarSalario(event){
    if (event.key === 'Enter'){
        changeSalario()
        valorSalario.value = '';
    }
}

function enviarConta(event){
    if (event.key === 'Enter'){
        changeConta()
        valorConta.value = '';
    } 
}


valorSalario.addEventListener('keydown', enviarSalario)
valorConta.addEventListener('keydown', enviarConta)