const valorSalario = document.querySelector('#inputSalarioRecebido')
const valorReceber = document.querySelector('#inputValueRecebido')
const BTNSalario = document.querySelector('.btn-salario')
const BTNReceber = document.querySelector('.btn-receber')
const BTNRetirar = document.querySelector('.btn-retirar')
const iconDel = document.querySelector('#del-icons')

function formatValue(value) {
    const formatador = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    return formatador
}
function formatInputCurrency(inputElement) {    //formatar valor do input em tempo real
    inputElement.addEventListener('input', () => {
        // pega só números
        let valor = inputElement.value.replace(/\D/g, '')

        // evita erro caso o campo fique vazio
        if (valor === '') {
            inputElement.value = ''
            return
        }

        // divide por 100 para considerar os centavos
        valor = Number(valor) / 100

        // usa a função que você já tem
        inputElement.value = formatValue(valor)
    })
}

function formatDateTime(value) {
    const data = new Date(value)

    // opções de formatação em pt-BR
    return data.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

function changeSalario(){
    const cardSalario = document.querySelector('.receita-valor')

    cardSalario.innerHTML = `${valorSalario.value}`

    valorSalario.value = '';

    BTNSalario.disabled = true
}

function delSalario(){
    const cardSalario = document.querySelector('.receita-valor')

    cardSalario.innerHTML = `${formatValue(0)}`;

    BTNSalario.disabled = false;

}

function changeConta(){

    const cardConta = document.querySelector('.valor-users')
    const list = document.querySelector('#list-transition')
    const descricao = document.querySelector('#input-descricao')
    const userData = document.querySelector('#input-data-users')

    cardConta.innerHTML = `${valorReceber.value}`

    list.innerHTML += `
        <li>
            <p class="li-info">${descricao.value}
                <span id="span-data">${formatDateTime(userData.value)}</span>
                <span>${valorReceber.value}</span>
            </p>
        </li>
    `
}

function retirarValor(){
    const list = document.querySelector('#list-transition')
    const descricao = document.querySelector('#input-descricao')
    const userData = document.querySelector('#input-data-users')
}

iconDel.addEventListener('click', delSalario)
BTNSalario.addEventListener('click', changeSalario)
BTNReceber.addEventListener('click', changeConta)
valorSalario.addEventListener('input', formatInputCurrency(valorSalario))
valorReceber.addEventListener('input', formatInputCurrency(valorReceber))


