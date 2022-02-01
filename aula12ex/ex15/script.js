function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${gênero} com ${idade} anos`
        res.appendChild(img)

    }

}

/*
if (idade < 14 && gênero == 'Homem'){
        foto = window.document.getElementById('imagem').src = "foto-bebe-m.png"

    } else if (idade < 14 && gênero == 'Mulher'){
        foto = window.document.getElementById('imagem').src = "foto-bebe-f.png"

    } else if (idade < 50 && gênero == 'Homem'){
        foto = window.document.getElementById('imagem').src = "foto-jovem-m.png"

    } else if (idade < 50 && gênero == 'Mulher'){
        foto = window.document.getElementById('imagem').src = "foto-jovem-f.png"

    } else if (idade > 49 && gênero == 'Homem'){
        foto = window.document.getElementById('imagem').src = "foto-idoso-m.png"

    } else if (idade > 9 && gênero == 'Mulher'){
        foto = window.document.getElementById('imagem').src = "foto-idoso-f.png"
    }
*/