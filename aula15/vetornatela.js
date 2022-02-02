let valores = [8, 7, 6, 5, 4, 3]
valores.sort()
/*
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição[${pos}] tem o valor = ${valores[pos]}`)
}
*/

for (let pos in valores){
    console.log(`A posição[${pos}] tem o valor = ${valores[pos]}`) 
}