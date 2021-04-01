
const numeros = [14, 21, 13, 49, 15, 6, 75, 82, 19, 100, 81, 22, 93, 14, 35]


numeros.forEach(function(item, indice){
   console.log(`Na Posição ${indice} Temos o número: ${item}`)
})

function SomaPositions(posX,posY) {
    let result = 0

    if(posX < 0 || posY < 0) {
        console.log("Posição Inválida")
    } else {
        result = posX + posY
        console.log(result)
    }
    
}

let pos1 = 4
let pos2 = 3

SomaPositions(numeros[pos1],numeros[pos2])

