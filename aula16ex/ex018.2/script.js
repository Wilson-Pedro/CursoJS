var numero = document.querySelector('#numero')
var tabela = document.querySelector('#tab')
var res = document.querySelector('#res')
var res2 = document.querySelector('#res2')
var res3 = document.querySelector('#res3')
var res4 = document.querySelector('#res4')
var contador = 0
var soma = 0
var maior = 0
var menor = 0
var media = 0

function adcionar(){
    if(numero.value.length == 0 || numero.value < 1 || numero.value > 100){
        alert('Digite os valores corretamente')
        foco()
    } else {
        var num = Number(numero.value)
        soma += num
        if (num > maior){
            maior = num
        }
        const item = document.createElement('option')
        item.textContent = `Número ${num} adcionado`
        contador += 1
        media = soma / contador
        tabela.appendChild(item)
        foco()
    }
}

function finalizar(){
    res.textContent += `Ao todo temos ${contador} números`
    res2.textContent += `O maior número encontrado foi ${maior}`
    res3.textContent += `A soma dos números é ${soma}`
    res4.textContent = `À media dos números é ${media}`
}

function foco(){
    numero.value = ''
    numero.focus()
    return true
}