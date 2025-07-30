const valorP = document.querySelector('.valor')

function formatValue(value) {
    const formatador = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return formatador
}