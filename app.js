const textoNaTelaPrincipal = document.querySelector('h2')
const textoNaTelaLegenda = document.querySelector('p')
const botao = document.querySelector('button')
const cotacoes = await pegaCotacao()
const cotacaoDoDolar = cotacoes.KRWUSD
const cotacaoDoReal = cotacoes.KRWBRL
const cotacaoDoEuro	= cotacoes.KRWEUR
console.log(cotacoes)
const dolarHoje = cotacaoDoDolar.bid
const euroHoje = cotacaoDoEuro.bid
const realHoje = cotacaoDoReal.bid

console.log(dolarHoje)
console.log(euroHoje)
console.log(realHoje)

botao.addEventListener("click", ()=>{
    conversor()
})

function conversor() {
    const moedaAConverter = document.querySelector('input[name=moeda]:checked').value
    const valorAConverter = prompt('Digite um valor em Won')
    let moeda = null
    let marcador = null

    switch(moedaAConverter) {
        case 'euro':
            moeda = euroHoje
            marcador = "EU$"
            break;
        case 'dolar':
            moeda = dolarHoje
            marcador = "U$"
            break;
        case 'real':
            moeda = realHoje
            marcador = "R$"
    }

    let valorConvertido = moeda * valorAConverter

    textoNaTelaPrincipal.textContent = marcador + valorConvertido.toFixed(2)

    textoNaTelaLegenda.textContent = "Este é o valor em " + moedaAConverter + "."

}


async function pegaCotacao() {
    try {
        const resposta = await fetch('https://economia.awesomeapi.com.br/json/last/KRW-USD,KRW-EUR,KRW-BRL')
    
        return await resposta.json()
    }
    catch {
        alert('não foi possivel pegar a cotação')
        throw error
    }
}
