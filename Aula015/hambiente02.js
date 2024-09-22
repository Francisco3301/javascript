var valores = [4,3,2,6,7,0]

//Primeiro meto
console.log(valores)

//segundo meto
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


//terceiro meto
for(var pos = 0; pos<valores.length;pos++){
    console.log(`A possição ${pos} tem valores ${valores[pos]}`)
}


//quarto meto 
for(var pos in valores){
    console.log(`A possição ${pos} tem valores ${valores[pos]}`)
}