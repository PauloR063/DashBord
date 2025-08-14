function formatValue(value) {
    const formatador = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return formatador
}

const valorSalario = document.querySelector('#inputSalarioRecebido')

function changeSalario(){
    const cardSalario = document.querySelector('.receita-valor')

    cardSalario.innerHTML = `${formatValue(parseFloat(valorSalario.value))}`
}   

function enviarInfo(event){
    if (event.key === 'Enter'){
        changeSalario()
        valorSalario.value = '';
    }
}

valorSalario.addEventListener('keydown', enviarInfo)