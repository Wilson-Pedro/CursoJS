function clicar(){
    var num = document.getElementById('n1')
    let tab = document.getElementById('seltab')
    res = document.getElementById('res')
    if (num.value.length == 0){
        window.alert('Digite um valor!')

    } else{
        var n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
    
}