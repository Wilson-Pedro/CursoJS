let numero = document.querySelector("input#num")
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adcionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adcione valores antes de finalizar')
    } else {
        let lot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / lot

        res.innerHTML =''
        res.innerHTML += `<p>Ao todo temos ${lot} valores adcionados</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}`
        res.innerHTML += `<p>A soma de todos os valores foi ${soma}`
        res.innerHTML += `<p>A média dos valores é igual a ${media}</p>`
    }
}