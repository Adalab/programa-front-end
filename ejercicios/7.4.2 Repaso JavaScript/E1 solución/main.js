// cada segundo
// Aumentar la cuenta en 1

// Para obtener las horas, minutos y segundos
// El tiempo se divide entre 3600
// lo que resta sería minutos
// Se divide entre 60
// lo que resta serían segundos

// Para mostrar el tiempo
// Mostrarlo con innerHTML

// cuenta = 4860
// 4860 / 3600 = 1 Math.floor con algo => HORAS
// cuenta % 3600 = 1260 segundos restantes => SEGUNDOS_RESTANTES
// segundosRestantes / 60 = 21 minutos => MINUTOS
// segundosRestantes % 60 = 0 => SEGUNDOS_FINALES

function sumar(a, b) {
  return a + b
}

console.log(sumar(2, 10)) // Imprime 12

'use strict'

var cuenta = 0
var segundo = 1000
var horas = 0
var minutos = 0
var segundosFinales = 0

function pararCuenta() {
  window.clearInterval(aumentarCuenta)
}

function reanudarCuenta() {
  window.setInterval(aumentarCuenta, segundo)
}

function calcularMinutos(cuenta, horas) {
  return Math.floor((cuenta - 3600) * horas / 60)
}

function imprimirHola() {
  return 'Hola'
}


function aumentarCuenta() {
  cuenta = cuenta + 1
  horas = Math.floor(cuenta / 3600)
  minutos = calcularMinutos(cuenta, horas)
  segundos = (cuenta - 60 * minutos) % 60
}

function imprimirTiempo() {
  console.log(horas.toString() + minutos.toString() + segundosFinales.toString())
}

window.setInterval(aumentarCuenta, segundo)

pararCuenta()

window.setInterval(imprimirTiempo, segundo)
