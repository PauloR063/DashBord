function formatValue(value) {
    const formatador = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return formatador
}

function showValue() {
    const valorP = document.querySelector('.valor')
    const valorUsers = document.querySelector('.valor-users')
    const usersActive = document.querySelector('.users-active')
    let totalUsers = 0

    const totalValue = options.reduce((acc, value) => acc + value.ValordeCompra, 0);
    const presenceFilter = options.filter(item => item.Presença === true)
    const presenceActive = presenceFilter.reduce((acc) => acc + 1, 0)
    options.forEach(() => {totalUsers++})


    valorP.textContent = formatValue(totalValue)
    valorUsers.textContent = totalUsers
    usersActive.textContent = presenceActive
    
}

showValue()

