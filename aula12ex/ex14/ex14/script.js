function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        foto = window.document.getElementById('imagem').src="manha.png"
        window.document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18){
        foto = window.document.getElementById('imagem').src="tarde.png"
        window.document.body.style.background = '#b9846f'

    } else {
        foto  = window.document.getElementById('imagem').src="noite.png"
        window.document.body.style.background = '#515154'
    } 
}



/*
function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        foto.innerHTML = <img src="manha.png"></img>

    } else if (hora >= 12 && hora < 18){
        foto.innerHTML = <img src="tarde.png"></img>

    } else {
        foto.innerHTML = <img src="noite.png"></img>
    }
}
*/ 