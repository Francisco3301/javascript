var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)
if(hora < 12) {
    console.log('BOM dia!')
} else if (hora <= 18){
    console.log('Boa tarte!')
} else {
    console.log('Boa noite!')
}
