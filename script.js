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
    const receitaValor = document.querySelector('.receita-valor')
    let totalUsers = 0

    const totalActive = options
        .filter(usuario => usuario.Presença === true)
        .reduce((soma, usuario) => soma + usuario.ValordeCompra, 0);
    const totalValue = options.reduce((acc, value) => acc + value.ValordeCompra, 0);
    const presenceFilter = options.filter(item => item.Presença === true)
    const presenceActive = presenceFilter.reduce((acc) => acc + 1, 0)
    options.forEach(() => {totalUsers++})

    valorP.textContent = formatValue(totalActive)
    valorUsers.textContent = totalUsers
    usersActive.textContent = presenceActive
    receitaValor.textContent = formatValue(totalValue)
    
}

function showName(){
    const listName = document.querySelector('.uls-name')
    const listPrecense = document.querySelector('.uls-precense')
    const listValor = document.querySelector('.uls-valor')
    let LiName = ''
    let LiPresence = ''
    let LiValor = ''
    options.forEach((product) => {
        LiName += `
        <li>
           <p>${product.Nickname}</p>
        </li>
        `
        LiPresence += `
        <li>
            <p>${product.Presença ? 'Ativo' : 'Expirado'}</p>
        </li>
        `
        LiValor += `
        <li>
            <p>${formatValue(product.ValordeCompra)}</p>
        </li>
        `
    });
    
    listName.innerHTML = LiName
    listPrecense.innerHTML = LiPresence
    listValor.innerHTML = LiValor
    
}

showValue()
showName()

