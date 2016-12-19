"use strict"
var baraja=[]
var palos=["corazones", "rombos", "tréboles", "picas"]

for (var i = 1; i <= 13; i++) {

  for (var j = 0; j < palos.length; j++) {

    var carta = {palo: palos[j], valor: i}
    baraja.push(carta)

  }

}

console.log (baraja)

var mano1 = []




for (var i = 1; i <= 3; i++) {
  var posicionCartaAlAzar= Math.floor(Math.random()* baraja.length)
  var cartaAlAzar = baraja [posicionCartaAlAzar]
  mano1.push(cartaAlAzar)

}
console.log( mano1)

function puntuacionMano(mano) {
  var resultado= 0

  for (var i = 0; i < mano.length; i++) {
    resultado= resultado + mano[i] ["valor"]
  }
  console.log ("El resultado es " + resultado)
  var divPuntuacion=  document.querySelector(".puntuacion") 
  if (resultado>21) {
   divPuntuacion .innerHTML ="Has perdido"
 }else{
  divPuntuacion .innerHTML= resultado
}

}

puntuacionMano ( mano1)
function nuevaCarta(){
  var cartaImg= document.querySelector(".cartas img")
  cartaImg.src= "images/1-picas.png"

}

var botonNuevo = document.querySelector("#nuevo-juego")
botonNuevo.addEventListener("click", nuevaCarta)






