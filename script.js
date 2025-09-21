function formatValue(value) {
    const formatador = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return formatador
}

const valorReceber = document.querySelector('#inputValueRecebido').value

function pegaValor(){
    valorReceber.value

    console.log(valorReceber)
}

pegaValor()
