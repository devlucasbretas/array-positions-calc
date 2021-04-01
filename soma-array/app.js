
let posX = document.getElementById("pos1")
let posY = document.getElementById("pos2")
let saida = document.getElementById("result")
let saida2 = document.getElementById("result2")
let res = 0

const numeros = [14, 21, 13, 49, 15, 6, 75, 82, 19, 100, 81, 22, 93, 14, 35]

function Somar() {
    if(posX.value < 0 || posY.value < 0  || posX.value == "" || posY.value == "") {
        alert("Por Favor Digite uma posição válida")
    } else {
       res = numeros[posX.value] + numeros[posY.value]
       saida.innerHTML = `
            A Soma das Posições <span class="x">${posX.value}</span> e <span class="y">${posY.value}</span> é igual a ${res}`
       saida2.innerHTML = `
            Na Posição 
                <span class="x">
                    ${posX.value}</span> temos <span class="x">${numeros[posX.value]}
                </span>
            e na Posição 
                <span class="y">
                    ${posY.value}</span> temos <span class="y">${numeros[posY.value]}
                </span>`
    }
}

function NovaSoma() {
    posX.value = ""
    posY.value = ""
    saida.innerHTML = ""
    saida2.innerHTML = ""
}

