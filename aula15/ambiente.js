let num = [5, 4, 3, 2, 1]
num.sort()
num.push(0)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log('O valor não foi encntrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
